using System;
namespace FantasyCoinballApi.Models
{
    public abstract class Person
    {
        public string Name { get; set; }
        public int Score { get; set; }
        public abstract string Type { get; }
        public virtual bool IsSpecial { get { return false; }}

        public Person()
        {
            Score = 50;
        }
    }
    public class Developer : Person {
        public override string Type { get { return "Developer"; }}
    }
    public class Evangelist : Person {
        public override string Type { get { return "Evangelist"; }}
        public override bool IsSpecial { get { return true; } }
    }
    public class TechLead : Person {
        public override string Type { get { return "TechLead"; }}
    }
    public class WildCard : Person {
        public override string Type { get { return "WildCard"; }}
        public override bool IsSpecial { get { return true; } }
    }
}
