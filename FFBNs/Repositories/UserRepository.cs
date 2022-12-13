using Microsoft.Extensions.Configuration;
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

        //Get all user profiles- good model but likely unused 
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




        //Get user profile by Id- Randomly generates
        public UserProfile GetAtRandom()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT TOP 1 d.Id AS 'DogId', d.UserName, 
                           d.Email, d.Avatar, d.Interests
                           FROM [Dog] d
                           ORDER BY NEWID()";

                    var reader = cmd.ExecuteReader();

                    UserProfile singleUserProfile = null;
                    while (reader.Read())
                    {
                        singleUserProfile = (new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "DogId"),
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

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [Dog] (Username, Email, Avatar, Interests )
                                    OUTPUT INSERTED.ID
                                    VALUES (@Username, @Email, @Avatar, @Interests)";
                    DbUtils.AddParameter(cmd, "@Username", userProfile.DisplayName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@Avatar", userProfile.PawFilePic);
                    DbUtils.AddParameter(cmd, "@Interests", userProfile.Interests);

                    userProfile.Id = (int)cmd.ExecuteScalar();

                }
            }
        }
        public UserProfile GetByEmail(string Email)
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
                          WHERE Email = @Email";

                    DbUtils.AddParameter(cmd, "@Email", Email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "DogId"),
                            DisplayName = DbUtils.GetString(reader, "Username"),
                            Email = DbUtils.GetString(reader, "Email")
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }
            public void Update(UserProfile userProfile)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                         UPDATE Dog
                           SET UserName = @UserName,
                               Email = @Email,
                               Avatar = @Avatar,
                               Interests = @Interests
                         WHERE Id = @Id";

                        DbUtils.AddParameter(cmd, "@Username", userProfile.DisplayName);
                        DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                        DbUtils.AddParameter(cmd, "@Avatar", userProfile.PawFilePic);
                        DbUtils.AddParameter(cmd, "@Interests", userProfile.Interests);
                        DbUtils.AddParameter(cmd, "@Id", userProfile.Id);

                    cmd.ExecuteNonQuery();
                    }
                }

            }
        //Get user profile by Id
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
                          WHERE Id = @Id";
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


        ////Get user profile by Id
        //public UserProfile GetById(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                  SELECT d.Id AS 'DogId', d.UserName, 
        //                       d.Email, d.Avatar, d.Interests
        //                  FROM [Dog] d
        //                   ";
        //            DbUtils.AddParameter(cmd, "@Id", id);
        //            var reader = cmd.ExecuteReader();

        //            UserProfile singleUserProfile = null;
        //            while (reader.Read())
        //            {
        //                singleUserProfile = (new UserProfile()
        //                {
        //                    Id = id,
        //                    DisplayName = DbUtils.GetString(reader, "UserName"),
        //                    Email = DbUtils.GetString(reader, "Email"),
        //                    PawFilePic = DbUtils.GetString(reader, "Avatar"),
        //                    Interests = DbUtils.GetString(reader, "Interests")
        //                });
        //            }
        //        reader.Close();

        //        return singleUserProfile;
        //        }
        //    }
        //}