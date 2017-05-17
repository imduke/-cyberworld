using System;
using System.Threading;
using System.Linq;

namespace HelloWorldConsole
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			int[] array = { 1, 3, 5, 7 };
			Console.WriteLine("Hello World!");
			Console.BackgroundColor = ConsoleColor.DarkGray;
			Console.ForegroundColor = ConsoleColor.Green;
			Random random = new Random();  
			while (true)
			{
				Thread.Sleep(1000);
				Console.WriteLine(array.Average());
				Console.WriteLine(random.Next(0,1000));
			}
		}
	}
}
