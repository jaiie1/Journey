using Journey.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace Journey.Controllers
{
    public class TripController : ApiController
    {

        public ApplicationDbContext db = new ApplicationDbContext();

        [Authorize]
        public List<string> GetTrips()
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            var userName = principal.Claims.Where(c => c.Type == "user_name").Single().Value;

            return new List<string> { "trip1", "trip2", "trip3" , "trip 4",};
        }

        
        //[HttpPost]
        //[Route("api/trips/report")]
        //public IHttpActionResult Report(PdfModel query)
        //{
            
        //    List<Carguide> listOfTrips = db.Carguide
        //       .Where(x => x.Vehicle.Id == query.VehicleId
        //               && x.Date >= query.FromDate
        //               && x.Date <= query.ToDate).Include(x => x.Vehicle)
        //       .ToList();


        //    TravelDistanceChart numberOfTrips = new TravelDistanceChart
        //    {
        //        ZeroToTwenty = listOfTrips.Where(x => x.KmStop - x.KmStart <= 20).Count(),
        //        TwentyOneToFifty = listOfTrips.Where(x => x.KmStop - x.KmStart >= 21 && x.KmStop - x.KmStart <= 50).Count(),
        //        FiftyOneToTwoHundred = listOfTrips.Where(x => x.KmStop - x.KmStart >= 51 && x.KmStop - x.KmStart <= 200).Count()
        //    };


        //    return Ok(numberOfTrips);
        //}
    }
}
