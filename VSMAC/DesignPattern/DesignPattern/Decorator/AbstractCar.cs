using System;
using System.Collections.Generic;
namespace Cybersys.DesignPattern.Decorator
{
    public abstract class AbstractCar
    {
        public List<string> Description;
        public abstract List<string> GetDescription();
        public abstract double GetPrice();
    }
}
