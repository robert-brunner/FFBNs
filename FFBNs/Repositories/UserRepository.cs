using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
using FFBNs.Utils;
namespace FFBNs.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT u.Id AS 'UserId', u.UserName, 
                               u.email, u.Avatar, u.Interests, u.Disinterests
                          FROM [User] u
                           ";

                    var reader = cmd.ExecuteReader();

                    var userProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "UserId"),
                            DisplayName = DbUtils.GetString(reader, "UserName"),
                            PawFilePic = DbUtils.GetString(reader, "Avatar"),
                            Interests = DbUtils.GetString(reader, "Interests"),
                            Disinterests = DbUtils.GetString(reader, "DisInterests"),



                        }); ;
                    }

                    reader.Close();

                    return userProfiles;
                }
            }
        }
    }
}
