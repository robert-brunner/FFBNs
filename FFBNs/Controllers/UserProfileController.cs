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

        //GET: List the PawFiles that are matched with 
        [HttpGet("GetAllMatches")]
        public IActionResult GetAllMatches()
        {
            return Ok(_userRepository.GetAllMatches());
        }



        // generates a random profile from the database
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

        //Creates a User PawFile
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
        // Edit a UserPawFile
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {

            _userRepository.Update(userProfile);
            return NoContent();
        }
        //Gets a PawFile by the Id associated with it. 
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
        //// PUT should insert like into specific SQL Profile
        //[HttpPut("{id}")]
        //public IActionResult Like(int id, UserProfile userProfile)
        //{

        //    _userRepository.Update(userProfile);
        //    return NoContent();
        //}
        ////need to insert like into profile somehow

    }


}

//local storage logged in user id instead of use params


/* To do today--
 * Setup link to GetByEmail on front end ( you need to edit/view your current user profile and not a random one like the GetAtRandom Method
 * 
 * Finish setting up the EditProfile (PUT)- it needs to be by email
 
 */