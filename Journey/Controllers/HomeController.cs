using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Journey.Controllers
{
    public class HomeController : Controller
    {

        readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        public ActionResult Index()
        {
            try
            {
                object m = null;
                string s = m.ToString();
            }
            catch (Exception ex)
            {
                _log.Error("An exepcion oncurred while trying to convert object m to string", ex);
            }

            return View();
        }
    }
}

//ViewBag.Title = "Home Page";