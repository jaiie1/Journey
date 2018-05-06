using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Journey.Models
{
    public class Carguide
    {
        public int CarguideId { get; set; }

        public Vehicle Vehicle { get; set; }

        public DateTime Date { get; set; }
        
        public int KmStart { get; set; }
       
        public int KmStop { get; set; }
        
        public string StartDes { get; set; }
       
        public string StopDes { get; set; }
               
        public string Andtek { get; set; }

        public string Arende { get; set; }

      

        public Carguide(DateTime Date, int kmStart, int kmStop, string startDes, string stopDes, string andtek, string arende, Vehicle vehicle)
        {

            

            this.Date = Date;
            KmStart = kmStart;
            KmStop = 0;
            StartDes = startDes;
            StopDes = stopDes;
            Andtek = andtek;
            Arende = arende;
            Vehicle = vehicle;

        }
        public Carguide()
        {

        }

    }
}