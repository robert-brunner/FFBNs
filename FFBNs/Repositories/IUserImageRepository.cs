using FFBNs.Models;
using System.Collections.Generic;

namespace FFBNs.Repositories
{
    public interface IUserImageRepository
    {
        void Add(UserImages userImages );
        List<UserImages> GetAllImagesById(int id);
    }
}