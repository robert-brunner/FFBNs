﻿using FFBNs.Repositories;
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
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }

        //GET api/<UserProfileController>/5
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


        //    [HttpGet("GetByEmail")]
        //    public IActionResult GetByEmail(string email)
        //    {
        //        var user = _userRepository.GetByEmail(email);

        //        if (email == null || user == null)
        //        {
        //            return NotFound();
        //        }
        //        return Ok(user);
        //    }

        //    [HttpPost]
        //    public IActionResult Post(UserProfile userProfile)
        //    {
        //        userProfile.CreateDateTime = DateTime.Now;
        //        userProfile.UserTypeId = UserType.AUTHOR_ID;
        //        _userRepository.Add(userProfile);
        //        return CreatedAtAction(
        //            "GetByEmail",
        //            new { email = userProfile.Email },
        //            userProfile);
        //    }

        //}
        //[HttpPut("{id}")]
        //public IActionResult Put(int id, UserProfile userProfile)
        //{

        //    _userRepository.UpdateIsActiveV2(id, userProfile);
        //    if (userProfile == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(userProfile);
        //}

        //[HttpPut("{id}/updateUserType")]
        //public IActionResult PutUpdateUserType(int id, UserProfile userProfile)
        //{

        //    if (userProfile == null)
        //    {
        //        return NotFound();
        //    }
        //    _userRepository.UpdateUserType(id, userProfile);
        //    return Ok(userProfile);
    }



    }

