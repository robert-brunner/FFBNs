using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
using FFBNs.Utils;
using Microsoft.AspNetCore.Connections;
using System.Xml.Linq;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography;

namespace FFBNs.Repositories
{
    public class UserImageRepository : BaseRepository, IUserImageRepository
    {
        public UserImageRepository(IConfiguration configuration) : base(configuration) { }


        public List<UserImages> GetAllImagesById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select id, userId, imageUrl FROM UserImages where userId = @id";
                    DbUtils.AddParameter(cmd, "id", id);

                    var reader = cmd.ExecuteReader();

                    var UserImages = new List<UserImages>();
                    while (reader.Read())
                    {
                        UserImages.Add(new UserImages()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            userId = DbUtils.GetInt(reader, "userId"),
                            imageUrl = DbUtils.GetString(reader, "image")


                        });
                    }

                    reader.Close();

                    return UserImages;
                }
            }
        }

        public void Add(UserImages userImages)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"";
                    DbUtils.AddParameter(cmd, "@id", userImages.id);
                    DbUtils.AddParameter(cmd, "@userId", userImages.userId);
                    DbUtils.AddParameter(cmd, "@imageUrl", userImages.imageUrl);

                    userImages.id = (int)cmd.ExecuteScalar();

                }
            }
        }
    }
}
