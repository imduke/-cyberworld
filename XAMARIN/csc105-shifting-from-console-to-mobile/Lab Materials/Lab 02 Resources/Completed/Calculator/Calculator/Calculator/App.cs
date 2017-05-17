using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Xamarin.Forms;

namespace Calculator
{
	public class App : Application
	{
		public App()
		{
			// The root page of your application
            ContentPage page = new ContentPage();

            StackLayout layout = new StackLayout() {
                Padding = 20, 
                Spacing = 20
            };

            layout.Children.Add(new Label() {
                Text = "Enter 1st number"
            });

            Entry firstNumber = new Entry();
            layout.Children.Add(firstNumber);

            layout.Children.Add(new Label() {
                Text = "Enter 2nd number"
            });

            Entry secondNumber = new Entry();
            layout.Children.Add(secondNumber);

            Button calcButton = new Button() {
                Text = "Calculate"
            };

            layout.Children.Add(calcButton);

            page.Content = layout;

            MainPage = page;
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
