using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Data;
using Logic;
using bovinet.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;
        public ProductController(BovinetContext context)
        {
            _productService = new ProductService(context);
        }
        // GET: api/<ProductController>
        [HttpGet]
        public IEnumerable<ProductViewModel> Get()
        {
            var products = _productService.Consult().Select(p => new ProductViewModel(p));
            return products;
        }

        // POST api/<ProductController>
        [HttpPost]
        public ActionResult<ProductViewModel> Post(ProductInputModel productInput)
        {
            Product product = ProductMapper(productInput);
            SaveProductResponse saveProductResponse = _productService.Save(product);
            var response = saveProductResponse;
            if (response.Error)
            {
                return BadRequest(response.Message);
            }
            return Ok(response.Product);
        }

        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _productService.Delete(identification);
            return Ok(messaje);
        }
        public Product ProductMapper (ProductInputModel productInput)
        {
            var product = new Product
            {
                Code = productInput.Code,
                LiterCost = productInput.LiterCost,
                Quantity = productInput.Quantity,
                Date = productInput.Date,
                AnimalCode = productInput.AnimalCode
            };
            return product;
        }
    }
}
