using Forma1.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Forma1.DAL
{
    public class TeamRepository : ITeamRepository
    {

        private readonly TeamDbContext db;
        public TeamRepository(TeamDbContext db)
        {
            this.db = db;
        }

        public Team Delete(int id)
        {
            var dbRecord = db.Teams.FirstOrDefault(t => t.Id == id);
            if (dbRecord == null) return null;
            else
            {
                var ret = dbRecord;
                db.Teams.Remove(dbRecord);
                db.SaveChanges();
                return ret;
            }
        }

        public List<Team> FindAll()
        {
            var dbRecords = db.Teams.ToList();
            return dbRecords;
        }

        public Team FindById(int id)
        {
            var dbRecord = db.Teams.FirstOrDefault(t => t.Id == id);
            if (dbRecord == null) return null;
            else return dbRecord;
        }

        public Team Insert(Team value)
        {
            using (var tran = db.Database.BeginTransaction(System.Data.IsolationLevel.RepeatableRead))
            {
                var toInsert = new Team() { Name = value.Name, Fundation = value.Fundation, Paid = value.Paid, Win = value.Win };
                db.Teams.Add(toInsert);
                db.SaveChanges();
                tran.Commit();
                return toInsert;
            }
        }

        public Team Update(Team value, int id)
        {
            var dbRecord = db.Teams.FirstOrDefault(t => t.Id == id);
            if (dbRecord == null) return null;
            else
            {
                dbRecord.Name = value.Name;
                dbRecord.Fundation = value.Fundation;
                dbRecord.Paid = value.Paid;
                dbRecord.Win = value.Win;
                db.SaveChanges();
                return dbRecord;
            }
        }

        public IReadOnlyCollection<Team> List()
        {
            var dbRecords = db.Teams.ToList();
            return dbRecords;
        }
    }
}
