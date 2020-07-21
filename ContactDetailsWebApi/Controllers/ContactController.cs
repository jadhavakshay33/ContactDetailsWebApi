using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ContactDetailsWebApi.Models;
using Microsoft.Ajax.Utilities;

namespace ContactDetailsWebApi.Controllers
{
    [EnableCors("*","*","*")]
    public class ContactController : ApiController
    {
        [HttpGet]
        [Route("Contact/HomaePage")]
        public IHttpActionResult HomePage()
        {
            return Ok();
        }

        [HttpGet]
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
        [Route("Contact/AddNewContact")]
 
        public bool AddNewContact([FromBody]ContactDetailsViewModel con)
        {
           

            if(String.IsNullOrEmpty(con.Name) && String.IsNullOrEmpty(con.Phone) && String.IsNullOrEmpty(con.Email))
            {
                return false;
            }

            using (var db = new CallLogDBEntities())
            {
                db.ContactDetailsTables.Add(new ContactDetailsTable()
                {
                    Name = con.Name,
                    Email = con.Email,
                    Phone = con.Phone,
                    CreationDate = System.DateTime.Today
                }); ;

                db.SaveChanges();
            }

            return true;
        }

      
        [Route("Contact/DeleteConact/{ID}")]
        public bool DeleteConact(int id)
        {
            if (id <= 0)
                return false;

            using (var db = new CallLogDBEntities())
            {
                var Contact = db.ContactDetailsTables
                    .Where(s => s.ID == id)
                    .FirstOrDefault();
                if(Contact==null)
                {
                    return false;
                }
                else
                {
                    db.Entry(Contact).State = System.Data.Entity.EntityState.Deleted;
                    db.SaveChanges();
                }
            }
            return true;
        }

    }
}
