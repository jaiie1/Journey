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
using Journey.Models;

namespace Journey.Controllers
{
    public class PdfModelsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/PdfModels
        public IQueryable<PdfModel> GetPdfModels()
        {
            return db.PdfModels;
        }

        // GET: api/PdfModels/5
        [ResponseType(typeof(PdfModel))]
        public IHttpActionResult GetPdfModel(int id)
        {
            PdfModel pdfModel = db.PdfModels.Find(id);
            if (pdfModel == null)
            {
                return NotFound();
            }

            return Ok(pdfModel);
        }

        // PUT: api/PdfModels/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPdfModel(int id, PdfModel pdfModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pdfModel.VehicleId)
            {
                return BadRequest();
            }

            db.Entry(pdfModel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PdfModelExists(id))
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

        // POST: api/PdfModels
        [ResponseType(typeof(PdfModel))]
        public IHttpActionResult PostPdfModel(PdfModel pdfModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PdfModels.Add(pdfModel);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pdfModel.VehicleId }, pdfModel);
        }

      

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PdfModelExists(int id)
        {
            return db.PdfModels.Count(e => e.VehicleId == id) > 0;
        }
    }
}