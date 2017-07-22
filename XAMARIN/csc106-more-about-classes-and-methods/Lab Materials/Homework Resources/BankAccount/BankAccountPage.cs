using System;

using Xamarin.Forms;

namespace BankAccount
{
    public class BankAccountPage : ContentPage
    {
        private BankAccount myWallet;
        private BankAccount bankAccount;

        private Entry amountEntry;
        private Label myWalletLabel;
        private Label bankAccountLabel;

        public BankAccountPage()
        {
            myWallet = new BankAccount(100);
            bankAccount = new BankAccount(200);

            Button depositButton = new Button { Text = "Deposit To Bank" };
            Button withDrawButton = new Button { Text = "Withdraw From Bank" };
            amountEntry = new Entry { Placeholder = "Enter Amount of Money" };
            myWalletLabel = new Label();
            bankAccountLabel = new Label();

            amountEntry.Keyboard = Keyboard.Numeric;
            depositButton.Clicked += DepositButton_Clicked;
            withDrawButton.Clicked += WithDrawButton_Clicked;

            Content = new StackLayout
            {
                Padding = 20,
                Children = {
                    amountEntry,
                    depositButton,
                    withDrawButton,
                    new Label {Text ="My Wallet",FontAttributes=FontAttributes.Bold,FontSize=18 },
                    myWalletLabel,
                    new Label {Text ="Bank Account",FontAttributes=FontAttributes.Bold,FontSize=18 },
                    bankAccountLabel
                }
            };

            updateLabels();
        }
       

        private void DepositButton_Clicked(object sender, EventArgs e)
        {
            transferMoney(myWallet, bankAccount);
        }

        private void WithDrawButton_Clicked(object sender, EventArgs e)
        {
            transferMoney(bankAccount, myWallet);
        }

        private void transferMoney(BankAccount fromAccount, BankAccount toAccount)
        {
            //Is this a valid requested amount?
            double requestedAmount;
            if (double.TryParse(amountEntry.Text, out requestedAmount))
            {
                //Do we have enough money in our wallet?
                if (fromAccount.Withdraw(requestedAmount))
                {
                    toAccount.Desposit(requestedAmount);
                    updateLabels();
                }
                else
                {
                    DisplayAlert("Out of Money", "We don't have enough money to complete this transfer", "Okay");
                }
            }
            else
            {
                DisplayAlert("Not a Valid Amount", "Please enter a valid amount.", "Okay");
            }
        }

        private void updateLabels()
        {
            myWalletLabel.Text = myWallet.AmountOfMoney.ToString("C");
            bankAccountLabel.Text = bankAccount.AmountOfMoney.ToString("C");
        }
    }
}
