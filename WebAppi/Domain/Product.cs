namespace WebAppi.Domain
{
    public class Product
    {
        public string name { get; set; }
        public List<int> sells { get; set; }

        public Product()
        {
            sells = new List<int>();
        }
    }
}
