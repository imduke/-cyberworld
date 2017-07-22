using System;
using Xamarin.Forms;

namespace Constructors
{
	public class MainPage : ContentPage
	{
		public MainPage()
		{
			BankAccount account1 = new BankAccount();
			BankAccount account2 = new BankAccount("College Fund");
			BankAccount account3 = new BankAccount("Checking", new DateTime(2014, 7, 10, 15, 0, 0), 50000);

			// Create the UI
			Padding = new Thickness(30.0);
			Content = new StackLayout
				{
					Children =
						{
							new Label { Text = account1.GetAccountInfo() },
							new Label { Text = account2.GetAccountInfo() },
							new Label { Text = account3.GetAccountInfo() },
						}
					};
		}
	}
}