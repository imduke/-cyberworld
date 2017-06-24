using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator
{
    public class CompactCar : AbstractCar
    {
        public CompactCar()
        {
			if (Description == null)
			{
				Description = new List<string>();
			}
            Description.Add("Compact Car");
        }
        public override List<string> GetDescription()
        {
            return Description;
        }

        public override double GetPrice()
        {
            return 20000;
        }
    }
}
