using Xamarin.Forms;
using System.Collections.ObjectModel;

namespace OptionalParameters
{
	public class MainPage : ContentPage
	{
		public const string Computer1 = "Macbook Pro";
		public const string Computer2 = "Macbook Air";
		public const string Computer3 = "Mac Mini";

		void PlaceOrders()
		{
			// TODO: add some computer choices using the PlaceOrder method
			PlaceOrder(Computer1, false, false);
			PlaceOrder(Computer2, true,  false);
			PlaceOrder(Computer2, false, true );
			PlaceOrder(Computer1, true,  true );
		}

		void PlaceOrder(string computer, bool appleCare = true, bool setUp = true)
		{
			double subTotal = 0;

			switch (computer)
			{
				case Computer1:
					subTotal = 2000;
					break;
				case Computer2:
					subTotal = 1800;
					break;
				case Computer3:
					subTotal = 1500;
					break;
				default:
					subTotal = 1000;
					break;
			}

			if (appleCare == true)
			{
				subTotal += 100;
			}

			if (setUp == true)
			{
				subTotal += 50;
			}

			AddChoice(computer, subTotal);
		}

		public MainPage()
		{
			PlaceOrders();

			Padding = new Thickness(30);
			Content = new ListView { ItemsSource = choices };
		}

		// This code adds new choices to the list in the UI. We will be
		// covering this sort of code in the next module, for now just
		// use it as-is.
		private ObservableCollection<string> choices = new ObservableCollection<string>();
		void AddChoice(string computer, double price)
		{
			choices.Add(string.Format("{0}: {1:C}", computer, price));
		}
	}
}