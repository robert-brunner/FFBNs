using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace FFBNs.Models
{
    public class UserImages
    {
        public int id { get; set; }
        public int userId { get; set; }
        public string imageUrl { get; set; }
    }
}
