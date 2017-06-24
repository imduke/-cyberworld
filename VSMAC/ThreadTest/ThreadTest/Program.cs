using System;
using System.Threading;
using System.Threading.Tasks;

namespace ThreadTest
{
    class Program
    {
        static void Main(string[] args)
        {
			Thread t1 = new Thread(new ThreadStart(DoSomeThing));
			Thread t2 = new Thread(new ThreadStart(DoSomeThing));
			t1.Start();
			t2.Start();
			Console.WriteLine("Downloading...");
            Download();
            Console.WriteLine("Good Bye...");
        }

        static void DoSomeThing(){
            Thread.Sleep(5000);
            Console.WriteLine($"ThreadID: {Thread.CurrentThread.ManagedThreadId.ToString()}");
        }

        static void Download(){
            Task.Run(()=>{
				Thread.Sleep(3000);
				Console.WriteLine("Download Completed"); 
            });
        }

    }
}
