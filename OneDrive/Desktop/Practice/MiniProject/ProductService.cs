using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiniProject
{
    public class ProductService
    {
        List<Product> products = new List<Product>();
        void AddProduct(List<Product> products)
        {
            products.AddRange(products);
        }
        void RemoveProductById(int productId)
        {
            products.RemoveAt(productId);
        }
        void UpdateProduct();
        void GetAll();
        void GetByColor();
        void GetByPriceRange();

    }
}
