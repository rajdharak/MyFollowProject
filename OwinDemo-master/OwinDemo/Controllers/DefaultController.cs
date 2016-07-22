using OwinDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace OwinDemo.Controllers
{
    public class DefaultController : Controller
    {

        DbContext db = new DbContext();
        // GET: Default
        public ActionResult Index()
        {
            return View(db.Users.ToList());
        }


        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }          
                


        [HttpPost]
        public ActionResult Create([Bind(Include = "Id,UserName,Email,DateOfBirth")] User  Users)
        {
            if (ModelState.IsValid)
            {
                db.Users.Add(Users);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(Users);
        }
    }
}