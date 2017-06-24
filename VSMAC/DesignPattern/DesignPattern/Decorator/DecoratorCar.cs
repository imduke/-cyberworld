using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator
{
    public class DecoratorCar : AbstractCar
    {
        protected AbstractCar _car;
        public DecoratorCar(AbstractCar abstractCar)
        {
            _car = abstractCar;
        }
        public override List<string> GetDescription()
        {
            return _car.GetDescription();
        }
        public override double GetPrice()
        {
            return _car.GetPrice();
        }
    }
}
