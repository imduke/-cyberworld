using System;
using Xamarin.Forms;

namespace OutParameters
{
	public class MainPage : ContentPage
	{
		public MainPage()
		{
			// Create the UI for our page
			Label activeLabel      = new Label { Text = "Account is active? ",    TextColor = Color.Blue   };
			Label balanceLabel     = new Label { Text = "Balance: ",              TextColor = Color.Green  };
			Label lastDepositLabel = new Label { Text = "Date of last deposit: ", TextColor = Color.Purple };

			Padding = new Thickness(30.0);

			Content = new StackLayout
				{
					Children =
						{
							activeLabel,
							balanceLabel,
							lastDepositLabel
						}
					};

			// TODO: get account information
			Bank bank = new Bank();

			double balance;
			DateTime lastDeposit;
			bool activeAccount = bank.GetAccountInfo("1021379", out balance, out lastDeposit);

			// TODO: add information to the three labels
			activeLabel.Text += activeAccount.ToString();
			balanceLabel.Text += balance.ToString("C");
			lastDepositLabel.Text += lastDeposit.ToString();
		}
	}
}