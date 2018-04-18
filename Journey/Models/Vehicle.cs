using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey.Models
{
    public class Vehicle
    {
        public int VehicleId { get; set; }

        public string RegNr { get; set; }

        public bool Ative { get; set; }

        public List<Carguide> Carguides { get; set; }

        public Vehicle()
        {
            Carguides = new List<Carguide>();
        }
    }
}