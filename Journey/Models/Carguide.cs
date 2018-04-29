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
      
        public DateTime Date { get; set; }
        
        public int KmStart { get; set; }
       
        public int KmStop { get; set; }
        
        public string StartDes { get; set; }
       
        public string StopDes { get; set; }
               
    

        public List<Vehicle> Vehicles { get; set; }

        public Carguide()
        {
            Vehicles = new List<Vehicle>();
        }

    }
}