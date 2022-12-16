using FFBNs.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FFBNs.Repositories
{
    public interface ISwipeRepository
    {
        void Like(Swipe swipe);

        public void Delete(int id);
    }
}