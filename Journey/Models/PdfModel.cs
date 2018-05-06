using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Journey.Models
{
    public class PdfModel
    {
       [Key]
        public int VehicleId { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }


    }
    public class TravelDistanceChart
    {
        public int ZeroToTwenty { get; set; }
        public int TwentyOneToFifty { get; set; }
        public int FiftyOneToTwoHundred { get; set; }
    }


}