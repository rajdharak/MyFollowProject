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
using MyFolllowOwin.Models;
using MyFollowOwin.Models;
using Microsoft.AspNet.Identity;
using System.Web.ModelBinding;

namespace MyFollowOwin.Api_Controllers
{
    [RoutePrefix("api/[controller]")]
    public class FollowersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Followers
        public IQueryable<Followers> GetFollowers()
        {
            return db.Followers;
        }

        // GET: api/Followers/5
        [ResponseType(typeof(Followers))]
        public IHttpActionResult GetFollowers(int id)
        {
            Followers followers = db.Followers.Find(id);
            if (followers == null)
            {
                return NotFound();
            }

            return Ok(followers);
        }

        // PUT: api/Followers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFollowers(int id, Followers followers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != followers.Id)
            {
                return BadRequest();
            }

            db.Entry(followers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FollowersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Followers
        [ResponseType(typeof(Followers))]
        [Route]
        [HttpPost]
        public IHttpActionResult PostFollowers([FromBody] int Productid)
        {
            Followers followers = new Followers();
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
          
            {
                followers.UserId = user.Id;
            }
           
           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            followers.ProductId = Productid;
            followers.CreateDate = DateTime.Today;
            followers.ModifiedDate = DateTime.Today;
       
                if (user != null)
                db.Followers.Add(followers);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = followers.Id }, followers);
        }

        // DELETE: api/Followers/5
        [HttpDelete]
        [Route]
        [ResponseType(typeof(Followers))]
        public IHttpActionResult DeleteFollowers(int id)
        {
            var user = User.Identity.GetUserId();
            var followers = db.Followers.FirstOrDefault(e => e.ProductId == id && e.UserId == user);

            if (followers == null)
            {
                return NotFound();
            }

            db.Followers.Remove(followers);
            db.SaveChanges();

            return Ok(followers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FollowersExists(int id)
        {
            return db.Followers.Count(e => e.Id == id) > 0;
        }
    }
}