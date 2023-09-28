using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
	public class Question
	{
		[Key]
		public int QnId { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string QnInWords { get; set; } = string.Empty;

        [Column(TypeName = "nvarchar(50)")]
        public string? ImageName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Option1 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Option2 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Option3 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Option4 { get; set; }

        public int Level { get; set; }

        public int Answer { get; set; }
    }
}

