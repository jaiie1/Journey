using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey.Models
{
    public class Vehicle
    {
        public int VehicleId { get; set; }
        [Required]
        public string RegNr { get; set; }

        public bool Active { get; set; }

        public List<Carguide> Carguides { get; set; }

        public Vehicle()
        {
            Carguides = new List<Carguide>();
        }
    }
}