using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
namespace FFBNs.Models
{
    public class Swipe
    {
        public int Id { get; set; }
        public int DogId { get; set; }
        public int OtherDogId { get; set; }
        public bool Like { get; set; }

    }
}
