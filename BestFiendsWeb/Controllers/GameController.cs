using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using BestFiendsWeb.Models;

namespace BestFiendsWeb.Controllers
{
    public class GameController : Controller
    {
        //
        // GET: /Game/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Field()
        {
            Field f = new Field(6, 6);
            return View(f);
        }
	}
}