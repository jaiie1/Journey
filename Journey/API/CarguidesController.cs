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
using Journey.DataAccess;
using Journey.Models;

namespace Journey.API
{
    public class CarguidesController : ApiController
    {
        private DefaultDataContext db = new DefaultDataContext();

        // GET: api/Carguides
        public IQueryable<Carguide> GetCarguides()
        {
            return db.Carguides;
        }
        public List<Carguide> GetCarguidesByVehicleId(int vehicleId)
        {
            return db.Carguides.Where(x => x.Car_Id == vehicleId).ToList();
        }

        public List<Carguide> GetCarByDate(int vehicleId, DateTime fromDate, DateTime toDate)
        {
            return db.Carguides.Where(x => x.Car_Id == vehicleId && x.Date > fromDate && x.Date < toDate).ToList();
        }

       


        // GET: api/Carguides/5
        [ResponseType(typeof(Carguide))]
        public IHttpActionResult GetCarguide(int id)
        {
            Carguide carguide = db.Carguides.Find(id);
            if (carguide == null)
            {
                return NotFound();
            }

            return Ok(carguide);
        }

        // PUT: api/Carguides/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCarguide(int id, Carguide carguide)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carguide.CarguideId)
            {
                return BadRequest();
            }

            db.Entry(carguide).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarguideExists(id))
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

        // POST: api/Carguides
        [ResponseType(typeof(Carguide))]
        public IHttpActionResult PostCarguide(Carguide carguide)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Carguides.Add(carguide);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = carguide.CarguideId }, carguide);
        }

        // DELETE: api/Carguides/5
        [ResponseType(typeof(Carguide))]
        public IHttpActionResult DeleteCarguide(int id)
        {
            Carguide carguide = db.Carguides.Find(id);
            if (carguide == null)
            {
                return NotFound();
            }

            db.Carguides.Remove(carguide);
            db.SaveChanges();

            return Ok(carguide);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarguideExists(int id)
        {
            return db.Carguides.Count(e => e.CarguideId == id) > 0;
        }
    }
}