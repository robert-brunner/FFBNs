using FFBNs.Models;
using System.Collections.Generic;

namespace FFBNs.Repositories
{
    public interface IUserRepository
    {
        List<UserProfile> GetAll();
    }
}