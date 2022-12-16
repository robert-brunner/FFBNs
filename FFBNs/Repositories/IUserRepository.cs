using FFBNs.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FFBNs.Repositories
{
    public interface IUserRepository
    {
        List<UserProfile> GetAllMatches();

        //UserProfile GetById(int id);
        UserProfile GetAtRandom();
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string Email);
        void Update(UserProfile singleUserProfile);
        UserProfile GetById(int id);
    }
}