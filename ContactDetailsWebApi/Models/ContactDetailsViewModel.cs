using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactDetailsWebApi.Models
{
    public class ContactDetailsViewModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public System.DateTime CreationDate { get; set; }
    }
}