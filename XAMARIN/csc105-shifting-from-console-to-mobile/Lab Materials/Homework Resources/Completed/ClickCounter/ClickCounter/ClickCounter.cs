using System;

using Xamarin.Forms;

namespace ClickCounter
{
    public class App : Application
    {
        int totalClicks = 0;
        Label clickLabel;

        public App()
        {
            ContentPage page = new ContentPage();

            StackLayout layout = new StackLayout() {
                Padding = 20,
                Spacing = 5,
            };

            clickLabel = new Label() { Text = "No clicks." };
            layout.Children.Add(clickLabel);

            Button button = new Button() { Text = "Click Me!" };
            layout.Children.Add(button);

            button.Clicked += OnButtonClicked;

            page.Content = layout;
            MainPage = page;
        }

        void OnButtonClicked(object sender, EventArgs e)
        {
            totalClicks++;
            clickLabel.Text = string.Format("{0} clicks.", totalClicks);
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

