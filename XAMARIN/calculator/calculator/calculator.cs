using System;

using Xamarin.Forms;

namespace calculator
{
	public class App : Application
	{
		Entry firstNumber, secondNumber;
		StackLayout resultsLayout;
		Label sumLabel, productLabel, differenceLabel, quotientLabel;

		public App()
		{
			// The root page of your application
			ContentPage page = new ContentPage();

			StackLayout layout = new StackLayout()
			{
				Padding = 20,
				Spacing = 20
			};

			layout.Children.Add(new Label()
			{
				Text = "Enter 1st number"
			});

			firstNumber = new Entry();
			layout.Children.Add(firstNumber);

			layout.Children.Add(new Label()
			{
				Text = "Enter 2nd number"
			});

			secondNumber = new Entry();
			layout.Children.Add(secondNumber);

			Button calcButton = new Button()
			{
				Text = "Calculate"
			};

			calcButton.Clicked += OnCalculateClicked;
			layout.Children.Add(calcButton);

			resultsLayout = new StackLayout
			{
				IsVisible = false
			};

			resultsLayout.Children.Add(sumLabel = new Label());
			resultsLayout.Children.Add(differenceLabel = new Label());
			resultsLayout.Children.Add(productLabel = new Label());
			resultsLayout.Children.Add(quotientLabel = new Label());

			layout.Children.Add(resultsLayout);

			page.Content = layout;
			MainPage = page;
		}

		private void OnCalculateClicked(object sender, EventArgs e)
		{
			int number1 = int.Parse(firstNumber.Text);
			int number2 = int.Parse(secondNumber.Text);

			sumLabel.Text = string.Format("The sum is: {0}", number1 + number2);
			differenceLabel.Text = string.Format("The difference is: {0}", number1 - number2);
			productLabel.Text = string.Format("The product is: {0}", number1 * number2);

			int result = -1;
			if (number2 != 0)
				result = number1 / number2;
			quotientLabel.Text = string.Format("The quotient is: {0}", result);

			resultsLayout.IsVisible = true;
		}

		protected override void OnStart()
		{
			// Handle when your app starts
		}

		protected override void OnSleep()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume()
		{
			// Handle when your app resumes
		}
	}
}
