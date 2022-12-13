using FFBNs.Models;
using FFBNs.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Threading.Tasks;
namespace FFBNs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        //private readonly IUserProfileRepository _userProfileRepository;
        private readonly Repositories.IUserRepository _userRepository;
        public UserProfileController(IUserRepository userRepository)
        {
            //_userProfileRepository = userProfileRepository;
            _userRepository = userRepository;
        }

        //GET: api/<UserProfileController>
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }
        ////getById
        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var userProfile = _userRepository.GetById(id);
        //    if (userProfile == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(userProfile);
        //}



        [HttpGet]
        public IActionResult GetAtRandom()
        {
            var userProfile = _userRepository.GetAtRandom();
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
        //Hopefully this creates a user Pawfile
        [HttpPost()]
        public IActionResult Add( UserProfile userProfile)
        {

            _userRepository.Add(userProfile);
            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);

        }
        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        // PUT api/<UserProfileController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {

            _userRepository.Update(userProfile);
            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userProfile = _userRepository.GetById(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
    }


}

//local storage logged in user id instead of use params


/* To do today--
 * Setup link to GetByEmail on front end ( you need to edit/view your current user profile and not a random one like the GetAtRandom Method
 * 
 * Finish setting up the EditProfile (PUT)- it needs to be by email
 
 */