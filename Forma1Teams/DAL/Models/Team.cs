namespace Forma1.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; } //nev
        public int Fundation { get; set; } //alapitas eve
        public int Win { get; set; } //megnyert vilagbajnoksagok eve
        public bool Paid { get; set; } //befizette-e a nevezesi dijat

    }
}
