﻿using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
using FFBNs.Utils;
using Microsoft.AspNetCore.Connections;
using System.Xml.Linq;
using System.Reflection.PortableExecutable;

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
                          SELECT d.Id AS 'DogId', d.UserName, 
                               d.Email, d.Avatar, d.Interests
                          FROM [Dog] d
                           ";

                    var reader = cmd.ExecuteReader();

                    var userProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "DogId"),
                            DisplayName = DbUtils.GetString(reader, "UserName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            PawFilePic = DbUtils.GetString(reader, "Avatar"),
                            Interests = DbUtils.GetString(reader, "Interests"),
                        }); ;
                    }

                    reader.Close();

                    return userProfiles;
                }
            }
        }
        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT d.Id AS 'DogId', d.UserName, 
                               d.Email, d.Avatar, d.Interests
                          FROM [Dog] d
                           ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    UserProfile singleUserProfile = null;
                    while (reader.Read())
                    {
                        singleUserProfile = (new UserProfile()
                        {
                            Id = id,
                            DisplayName = DbUtils.GetString(reader, "UserName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            PawFilePic = DbUtils.GetString(reader, "Avatar"),
                            Interests = DbUtils.GetString(reader, "Interests")
                        });
                    }
                reader.Close();

                return singleUserProfile;
                }
            }
        }
    }

}
