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

        ////GET: api/<UserProfileController>
        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return Ok(_userRepository.GetAll());
        //}
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
        [HttpPut("{id}")]
        public IActionResult Add(int id, UserProfile userProfile)
        {

            _userRepository.Add(userProfile);
            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);

        }
    }


}

