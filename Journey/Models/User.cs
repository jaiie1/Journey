using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey.Models
{
    public class User
    {

        
        public int UserId { get; set; }
        [Display(Name = "Username")]

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int SSN { get; set; }

        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "Passwords do not match.")]
        public string ConfirmPassword { get; set; }

        public bool Active { get; set; }

       
        public int OwnVehicleId { get; set; }
    }
}