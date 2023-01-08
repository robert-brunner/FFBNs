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
    public class UserImageController : ControllerBase
    {
        private readonly Repositories.IUserImageRepository _userImageRepository;

        public UserImageController(IUserImageRepository userImageRepository)
        {
            //_userProfileRepository = userProfileRepository;
            _userImageRepository = userImageRepository;
        }


        [HttpGet("{id}")]
        public IActionResult GetAllImagesById(int id)
        {
            return Ok(_userImageRepository.GetAllImagesById(id));
        }



        //Post
        [HttpPost("PostImage")]
        public IActionResult Add(UserImages userImages)
        {

            _userImageRepository.Add(userImages);
            if (userImages == null)
            {
                return NotFound();
            }

            return Ok(userImages);
        }
    }
}
