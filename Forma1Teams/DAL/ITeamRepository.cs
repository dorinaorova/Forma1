using Forma1.Models;
using System.Collections.Generic;

namespace Forma1.DAL
{
    public interface ITeamRepository
    {
        IReadOnlyCollection<Team> List();

        List<Team> FindAll();
        Team FindById(int id);
        Team Insert(Team value);
        Team Delete(int id);
        Team Update(Team value, int id);
    }
}
