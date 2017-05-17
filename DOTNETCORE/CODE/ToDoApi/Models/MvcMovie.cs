using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class MvcMovie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }
}