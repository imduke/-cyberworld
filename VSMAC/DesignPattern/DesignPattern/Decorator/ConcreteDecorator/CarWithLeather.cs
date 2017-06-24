using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator.ConcreteDecorator
{
    public class CarWithLeather : DecoratorCar
    {
        public CarWithLeather(AbstractCar abstractCar): base (abstractCar)
        {
			if (base._car != null)
			{
				base._car.Description.Add("<Leather Seats>");
			}
        }
		public override List<string> GetDescription()
		{
            return _car.GetDescription(); //_car in base class DecoratorCar
		}

		public override double GetPrice()
		{
			return _car.GetPrice() + 2500;  //_car in base class DecoratorCar
		}
    }
}
