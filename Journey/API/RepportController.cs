using Journey.Models;
using Journey.Pdf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Journey.API
{
    public class RepportController : ApiController
    {
        
        [Route("api/reports/generate")]
        [HttpPost]
        public IHttpActionResult GeneratePdfUrl(PdfModel pdfModel)
        {
            var url = pdf.GetcarTripsPdfUrl(pdfModel);
            return Ok(url);
        }

        // POST: api/chart
        [Route("api/chart")]
        [HttpPost]
        public IHttpActionResult GenerateChart(PdfModel selection)
        {
            var carguidesController = new CarguidesController();
            var carTrips = carguidesController.GetCarByDate(selection.VehicleId, selection.FromDate, selection.ToDate);
            return Ok(carTrips);
        }
    }
}
