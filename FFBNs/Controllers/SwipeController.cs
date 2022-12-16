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
    public class SwipeController : ControllerBase
    {
        private readonly Repositories.ISwipeRepository _swipeRepository;
        public SwipeController(ISwipeRepository swipeRepository)
        {
            //_userProfileRepository = userProfileRepository;
            _swipeRepository = swipeRepository;
        }

        //// PUT should insert like into specific SQL Profile
        [HttpPost]
        public IActionResult Post(Swipe swipe)
        {

            _swipeRepository.Like(swipe);
            return NoContent();
        }
        ////need to insert like into profile somehow

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _swipeRepository.Delete(id);
            return NoContent();
        }
    }

}
