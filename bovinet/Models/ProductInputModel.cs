using System;
using Entity;

namespace bovinet.Models
{
    public class ProductInputModel
    {
        public string Code { get; set; }
        public float LiterCost { get; set; }
        public int Quantity { get; set; }
        public string Date { get; set; }
    }
    public class ProductViewModel : ProductInputModel
    {
        public ProductViewModel(Product product)
        {
            Code = product.Code;
            LiterCost = product.LiterCost;
            Quantity = product.Quantity;
            Date = product.Date;
        }
    }
}