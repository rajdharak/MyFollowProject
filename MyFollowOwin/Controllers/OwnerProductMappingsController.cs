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

namespace MyFollowOwin.Controllers
{
    
    [RoutePrefix("api/[controller]")]
    public class OwnerProductMappingsController : ApiController
    {
        
        private ApplicationDbContext db = new ApplicationDbContext();

        //GET: api/OwnerProductMappings
       [HttpGet]
       [Route]
       [ResponseType(typeof(OwnerProductMapping))]
        public Products[] GetAddedProducts()
        {
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            var ownersId = db.Owners.FirstOrDefault(element => element.UserId == user.Id).Id;
            var products = db.AddedProducts.Where(product => product.OwnerId == ownersId).Select(product => product.Products).ToArray();    
            return products;
        }

        // GET: api/OwnerProductMappings/5
        [ResponseType(typeof(OwnerProductMapping))]
        public IHttpActionResult GetOwnerProductMapping(int id)
        {
            OwnerProductMapping ownerProductMapping = db.AddedProducts.Find(id);
            if (ownerProductMapping == null)
            {
                return NotFound();
            }

            return Ok(ownerProductMapping);
        }

        // PUT: api/OwnerProductMappings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOwnerProductMapping(int id, OwnerProductMapping ownerProductMapping)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ownerProductMapping.Id)
            {
                return BadRequest();
            }

            db.Entry(ownerProductMapping).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OwnerProductMappingExists(id))
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

        // POST: api/OwnerProductMappings
        [HttpPost]
        [Route]
        [ResponseType(typeof(OwnerProductMapping))]
        public IHttpActionResult PostOwnerProductMapping(int productId)
        {
            OwnerProductMapping ownerProductMapping = new OwnerProductMapping();
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            var ownersId = db.Owners.FirstOrDefault(element => element.UserId == user.Id).Id;
            ownerProductMapping.OwnerId = ownersId;
            ownerProductMapping.ProductId = productId;
            ownerProductMapping.CreateDate = DateTime.Today;
            ownerProductMapping.ModifiedDate = DateTime.Today;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           
            db.AddedProducts.Add(ownerProductMapping);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ownerProductMapping.Id }, ownerProductMapping);
        }

        // DELETE: api/OwnerProductMappings/5
        [ResponseType(typeof(OwnerProductMapping))]
        public IHttpActionResult DeleteOwnerProductMapping(int id)
        {
            OwnerProductMapping ownerProductMapping = db.AddedProducts.Find(id);
            if (ownerProductMapping == null)
            {
                return NotFound();
            }

            db.AddedProducts.Remove(ownerProductMapping);
            db.SaveChanges();

            return Ok(ownerProductMapping);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OwnerProductMappingExists(int id)
        {
            return db.AddedProducts.Count(e => e.Id == id) > 0;
        }
    }
}