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
using ContactDetailsWebApi.Models;

namespace ContactDetailsWebApi.Controllers
{
    public class ContactController : ApiController
    {
        [HttpGet]
        [Route("Contact/HomaePage")]
        public IHttpActionResult HomePage()
        {
            return Ok();
        }


        [Route("Contact/GetAllContactDetails")]
        public IHttpActionResult GetAllContactDetails()
        {
            IList<ContactDetailsViewModel> Contacts = null;

            using (var db = new CallLogDBEntities())
            {
                Contacts = db.ContactDetailsTables.Include("Contacts")
                            .Select(s => new ContactDetailsViewModel()
                            {
                                ID=s.ID,
                                Name=s.Name,
                                Phone=s.Phone,
                                Email=s.Email,
                                CreationDate=s.CreationDate
                             
                            }).ToList<ContactDetailsViewModel>();
            }

            if (Contacts.Count == 0)
            {
                return NotFound();
            }

            return Ok(Contacts);
        }
        [HttpPost]
        public IHttpActionResult PostNewContact(ContactDetailsViewModel contact)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var db = new CallLogDBEntities())
            {
                db.ContactDetailsTables.Add(new ContactDetailsTable()
                {
                    ID = contact.ID,
                    Name = contact.Name,
                    Email = contact.Email,
                    Phone = contact.Phone,
                    CreationDate = System.DateTime.Today
                }); ;

                db.SaveChanges();
            }

            return Ok();
        }
    }
}
