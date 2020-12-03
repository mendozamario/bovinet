using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class ProductService
    {
        private readonly BovinetContext _context;
        public ProductService(BovinetContext context)
        {
            _context = context;
        }
        public SaveProductResponse Save(Product product)
        {
            try
            {
                var productSearch = _context.Products.Find(product.Code);
                if (productSearch != null)
                {
                    return new SaveProductResponse("This product has been registered");
                }
                _context.Products.Add(product);
                _context.SaveChanges();
                return new SaveProductResponse(product);
            }
            catch (System.Exception e)
            {
                return new SaveProductResponse($"Application Error: {e.Message}");
            }
        }
        public List<Product> Consult()
        {
            List<Product> products = _context.Products.ToList();
            return products;
        }
        public string Delete(string code)
        {
            try
            {
                var product = _context.Products.Find(code);
                if (product != null)
                {
                    _context.Products.Remove(product);
                    _context.SaveChanges();
                    return "Product has been removed";
                }
                else
                {
                    return "Product dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveProductResponse
    {
        public SaveProductResponse(string message)
        {
            Error = true;
            Message = message;
        }
        public SaveProductResponse(Product product)
        {
            Error = false;
            Product = product;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public Product Product { get; set; }
    }
}
