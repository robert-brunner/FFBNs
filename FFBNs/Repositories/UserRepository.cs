using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
//using FFBNs.Utils;
namespace FFBNs.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }


    }
}
