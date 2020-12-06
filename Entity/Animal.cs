using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Animal
    {
        [Key]
        public string Code { get; set; }
        public string Breed { get; set; }
        public float Weigth { get; set; }
        public string DateBirth { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Origin { get; set; }
        public List<MedicineApplied> MedicinesApplied { get; set; }
        public List<Product> Products { get; set; }
        [ForeignKey("OwnerId")]
        public string OwnerId { get; set; }
    }
}
