using System;
using Cybersys.DesignPattern.Decorator;
using Cybersys.DesignPattern.Decorator.ConcreteDecorator;

namespace Cybersys.DesignPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            AbstractCar theCar = new CompactCar();
            theCar = new CarWithNavigation(theCar);
            theCar = new CarWithLeather(theCar);
            theCar = new CarWithSunroof(theCar);

            foreach(var c in theCar.GetDescription())
            {
				Console.WriteLine($"Description: {c}");     
            }
           
            Console.WriteLine($"Price: {theCar.GetPrice()}");
        }
    }
}
