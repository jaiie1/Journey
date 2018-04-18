using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int SSN { get; set; }

        public string Email { get; set; }

        public string PassWord { get; set; }

        public bool Active { get; set; }

        public int OwnVehicleId { get; set; }
    }
}