using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
namespace FFBNs.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string PawFilePic { get; set; }
        public string Interests { get; set; }
        public string Disinterests { get; set; }

    }
}
