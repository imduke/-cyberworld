using System;
using Xamarin.Forms;

namespace Constructors
{
	public class MainPage : ContentPage
	{
		public MainPage()
		{
			// TODO: use different constructors for accounts.
			BankAccount account1 = new BankAccount();
			BankAccount account2 = new BankAccount();
			BankAccount account3 = new BankAccount();

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