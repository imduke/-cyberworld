using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator.ConcreteDecorator
{
    public class CarWithNavigation : DecoratorCar
    {
        public CarWithNavigation(AbstractCar abstractCar) : base(abstractCar)
        {
            if (base._car != null)
            {
                base._car.Description.Add("<In built Navigation>");
            }
        }

        public override List<string> GetDescription()
        {
            return _car.GetDescription(); //_car is in base class DecoratorCar
        }

        public override double GetPrice()
        {
            return _car.GetPrice() + 1000;  //_car in base class DecoratorCar
		}
    }
}
