using System;
using System.Security.Policy;
using WebAppi.Domain;
using WebAppi.Dto;
using WebAppi.Interfaces;

namespace WebAppi.Services
{
    public class WebServices : IWebServices
    {
        public getAgePublicReachedResponse getAgePublicReached()
        {   
            string[] ranges = { "10-17", "18-24", "24-32", "32-40", "40-60" };
            var totalRanges = ranges.Length;
            var remainingPercent = 100;

            List<AgeRange> array = new List<AgeRange>();
            Random rnd = new Random();

            foreach (var range in ranges)
            {
                AgeRange ageRange = new AgeRange();
                ageRange.range = range;

                if (remainingPercent <= totalRanges - 1)
                {
                    ageRange.percent = remainingPercent;
                }
                else
                {
                    ageRange.percent = rnd.Next(1, remainingPercent - (totalRanges - 1));
                }

                remainingPercent -= ageRange.percent;
                array.Add(ageRange);
            }

            return new getAgePublicReachedResponse() { ageRangeList = array };
        }

        public getBestSellersResponse getBestSellers()
        {
            Random rnd = new Random();
            string[] name = { "Product 1", "Product 2", "Product 3", "Product 4", "Product 5" };
            int[] quantity = {300, 120, 593, 94, 124};
            int[] price = {1000, 530, 5900, 499, 710};
            return new getBestSellersResponse() {
                name = name[rnd.Next(name.Length)],
                quantity = quantity[rnd.Next(quantity.Length)],
                price = price[rnd.Next(price.Length)]
            };
        }
        public getCurrentStatusResponse getCurrentStatus()
        {
            Random rnd = new Random();
            const int percent = 100;
            var actual = rnd.Next(percent);
            var expected = 100 - actual;

            return new getCurrentStatusResponse()
            {
                StatusActual = actual,
                StatusExpected = expected
            };
        }

        public getFirstThreeProdResponse getFirstThreeProd()
        {
            Random rnd = new Random();
            string[] names = { "Product 1", "Product 2", "Product 3" };

            List<Product> array = new List<Product>();

            foreach (string name in names)
            {
                Product product = new Product();
                product.sells.Add(rnd.Next(100));
                product.name = name;   
                array.Add(product);

            }
            return new getFirstThreeProdResponse { productList = array };
        }


        public getLastTwoProdResponse getLastTwoProd()
        {
            Random rnd = new Random();
            string[] names = { "Product 1", "Product 2"};

            List<Product> array = new List<Product>();

            foreach (string name in names)
            {
                Product product = new Product();
                foreach (int _ in Enumerable.Range(0, 7))
                {
                    product.sells.Add(rnd.Next(100));
                }
                product.name = name;
                array.Add(product);

            }
            return new getLastTwoProdResponse { productList = array };
        }

        public getBestSellerMontResponse getBestSellerMont()
        {
            Random rnd = new Random();

            int[] randomSells = new int[12];

            for (int i = 0; i < randomSells.Length; i++)
            {
                randomSells[i] = rnd.Next(100); 
            }

            return new getBestSellerMontResponse()
            {
                sells = randomSells
            };
        }

        public getTotalSellersResponse GetTotalSellers()
        {
            Random rnd = new Random();

            int[] randomSells = new int[12];

            for (int i = 0; i < randomSells.Length; i++)
            {
                randomSells[i] = rnd.Next(200);
            }

            return new getTotalSellersResponse()
            {
                quantity = randomSells,
                totalPrice = rnd.Next(100000)
            };
        }
    }
}
