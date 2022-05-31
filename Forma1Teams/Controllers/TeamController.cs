using Forma1.DAL;
using Forma1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Forma1.Controllers
{
    [Route("api/teams")]
    [ApiController]
    public class TeamController : Controller
    {
        private readonly ITeamRepository repository;

        public TeamController(ITeamRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("list")]
        public IEnumerable<Team> List()
        {
            return repository.List();
        }

        [HttpGet("find/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Team> FindById(int id)
        {
            var team = repository.FindById(id);
            if (team == null) return NotFound();
            return Ok(team);
        }

        [HttpPost("add")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Team> Create([FromBody] Team team)
        {
            try
            {
                var created = repository.Insert(team);
                return CreatedAtAction(nameof(FindById), new { id = created.Id }, created);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPut("update/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Team> Update([FromBody] Team team, int id)
        {
            try{
                var result = repository.Update(team, id);
                return Ok(result);
            }
            catch(ArgumentException ex){
                return BadRequest(new {error = ex.Message});
            }
        }

        [HttpDelete("delete/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Delete(int id){
            repository.Delete(id);
            return Ok();
        }

    }
}
