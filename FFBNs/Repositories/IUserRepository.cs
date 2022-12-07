using FFBNs.Models;
using System.Collections.Generic;

namespace FFBNs.Repositories
{
    public interface IUserRepository
    {
        //List<UserProfile> GetAll();
        //UserProfile GetById(int id);
        UserProfile GetAtRandom();
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string Email);
    }
}