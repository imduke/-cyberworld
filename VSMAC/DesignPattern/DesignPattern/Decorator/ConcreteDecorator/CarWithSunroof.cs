using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator.ConcreteDecorator
{
    public class CarWithSunroof : DecoratorCar
    {
		public CarWithSunroof(AbstractCar abstractCar) : base(abstractCar)
        {
			if (base._car != null)
			{
				base._car.Description.Add("<Clear Sunroof>");
			}
		}

		public override List<string> GetDescription()
		{
			return _car.GetDescription(); //_car is in base class DecoratorCar
		}

		public override double GetPrice()
		{
			return _car.GetPrice() + 5000;  //_car in base class DecoratorCar
		}
    }
}
