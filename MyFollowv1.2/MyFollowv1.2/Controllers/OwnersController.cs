using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MyFollowv1._2.Models;

namespace MyFollowv1._2.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class OwnersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Owners
        [HttpGet]
        public IEnumerable<Owners> GetOwners()
        {
            return db.Owners.ToList();
        }

        // GET: api/Owners/5
        [ResponseType(typeof(Owners))]
        public IHttpActionResult GetOwners(int id)
        {
            Owners owners = db.Owners.Find(id);
            if (owners == null)
            {
                return NotFound();
            }

            return Ok(owners);
        }
        // POST: api/Owners
        [HttpPost]
        public IHttpActionResult PostOwners(Owners owners)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Owners.Add(owners);
            db.SaveChanges();
            return Ok(owners);
            //return CreatedAtRoute("DefaultApi", new { id = owners.Id }, owners);
        }

        

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OwnersExists(int id)
        {
            return db.Owners.Count(e => e.Id == id) > 0;
        }
    }
}