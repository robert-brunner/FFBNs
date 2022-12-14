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

        //// PUT should insert like into specific SQL Profile
        [HttpPut("{id}")]
        public IActionResult Like(int id, Swipe swipe)
        {

            _swipeRepository.Update(swipe);
            return NoContent();
        }
        ////need to insert like into profile somehow

    }

}
