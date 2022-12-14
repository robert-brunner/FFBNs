using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FFBNs.Models;
using FFBNs.Utils;
using Microsoft.AspNetCore.Connections;
using System.Xml.Linq;
using System.Reflection.PortableExecutable;

namespace FFBNs.Repositories
{
    public class SwipeRepository : BaseRepository
    {
        public SwipeRepository : base(configuration) { }
        public void Update(Swipe swipe)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         UPDATE Swipe
                           SET Like = @Like
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Like", swipe.Like);
                    DbUtils.AddParameter(cmd, "@Id", swipe.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}