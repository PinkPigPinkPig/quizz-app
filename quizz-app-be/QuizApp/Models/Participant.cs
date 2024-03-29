﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
	public class Participant
	{
        [Key]
		public int ParticipantId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; } = string.Empty;

        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; } = string.Empty;

        public int Score { get; set; }

        public int TimeTaken { get; set; }
    }
}

