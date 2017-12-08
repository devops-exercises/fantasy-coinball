namespace FantasyCoinballApi.Models
{
    public class CoinNetwork
    {
        public string Name { get; set; }
        public Currency Currency { get; set; }
        public Person[] People { get; set; }
    }
}
