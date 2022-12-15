using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
using FFBNs.Utils;
using Microsoft.AspNetCore.Connections;
using System.Xml.Linq;
using System.Reflection.PortableExecutable;

namespace FFBNs.Repositories
{
    public class SwipeRepository : BaseRepository, ISwipeRepository
    {
        public SwipeRepository(IConfiguration configuration) : base(configuration) { }
        public void Like(Swipe swipe)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [Swipes] ([Like], DogId, OtherDogId)
                        OUTPUT INSERTED.ID
                        VALUES [@Like, @DogId, @OtherDogId]
                        ";

                    DbUtils.AddParameter(cmd, "@Like", swipe.Like);
                    DbUtils.AddParameter(cmd, "@DogId", swipe.DogId);
                    DbUtils.AddParameter(cmd, "@OtherDogId", swipe.OtherDogId);

                    swipe.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}   

//id of logged in user ID of other dog and wheather its a yes
    // INSERT INTO Swipe- might just be select based on previous projects.

//@"
//                         INSERT INTO Swipe
//                           SET Like = @Like
//                         WHERE Id = @Id  === @Like and 
//                        OtherDogId = @Like ";

//                        WHERE Id = @Id