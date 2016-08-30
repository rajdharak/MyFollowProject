﻿using System;
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
using System.Web;
using System.IO;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;

namespace MyFollowOwin.Api_Controllers
{
    [RoutePrefix("api/[controller]")]

    public class ProductMediasController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductMedias
        public IQueryable<ProductMedia> GetProductMedias()
        {
            return db.ProductMedias;
        }

        // GET: api/ProductMedias/5
        [ResponseType(typeof(ProductMedia))]
        public IHttpActionResult GetProductMedia(int id)
        {
            ProductMedia productMedia = db.ProductMedias.Find(id);
            if (productMedia == null)
            {
                return NotFound();
            }

            return Ok(productMedia);
        }

        // PUT: api/ProductMedias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductMedia(int id, ProductMedia productMedia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productMedia.Id)
            {
                return BadRequest();
            }

            db.Entry(productMedia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductMediaExists(id))
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

        // POST: api/ProductMedias
        [HttpPost]
        [Route]
        [ResponseType(typeof(ProductMedia))]
        public IHttpActionResult PostProductMedia()
        {
           var postedFile = HttpContext.Current.Request.Files["file"];
           var root = HttpContext.Current.Server.MapPath("~/Media/");
           Directory.CreateDirectory(root);
           var newFileName = postedFile.FileName;
           postedFile.SaveAs(root+newFileName);
           var mediaUploadRequest = JsonConvert.DeserializeObject<ProductMedia>(HttpContext.Current.Request.Form["data"]);
            mediaUploadRequest.Data = "Media/" + newFileName;
           try
           {
               if (ModelState.IsValid)
               {
                   db.ProductMedias.Add(mediaUploadRequest);
                   db.SaveChanges();
               }
               return Ok(mediaUploadRequest);
           }
           catch (Exception)
           {
               return BadRequest();
           }
        }

        // DELETE: api/ProductMedias/5
        [ResponseType(typeof(ProductMedia))]
        public IHttpActionResult DeleteProductMedia(int id)
        {
            ProductMedia productMedia = db.ProductMedias.Find(id);
            if (productMedia == null)
            {
                return NotFound();
            }

            db.ProductMedias.Remove(productMedia);
            db.SaveChanges();

            return Ok(productMedia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductMediaExists(int id)
        {
            return db.ProductMedias.Count(e => e.Id == id) > 0;
        }
    }
}