using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace CoreMvc.Controllers
{
	public class HelloWorldController : Controller
	{
		// 
		// GET: /HelloWorld/

		public string Index()
		{
			return "This is HelloWorld default action...";
		}

		// 
		// GET: /HelloWorld/Welcome/ 

		public string Welcome(string name, int numTimes = 1)
		{
			return HtmlEncoder.Default.Encode($"Hello {name}, NumTimes is: {numTimes}");
		}

		public IActionResult Test(string name, int numTimes = 1)
		{
			ViewData["Message"] = "Hello " + name;
			ViewData["NumTimes"] = numTimes;

			return View();	
		}
	}
}