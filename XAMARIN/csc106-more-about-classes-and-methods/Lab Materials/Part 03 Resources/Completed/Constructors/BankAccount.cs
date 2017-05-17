using System;

namespace Constructors
{
	public class BankAccount
	{
		public double   Balance     { get; set; }
		public DateTime LastDeposit { get; set; }
		public bool     IsActive    { get; set; }
		public string   AccountName { get; set; }

		public BankAccount()
			: this("Unknown Account", new DateTime())
		{
			IsActive = false;
		}

		public BankAccount(string accountName)
			: this(accountName, DateTime.Now)
		{
		}

		public BankAccount(string accountName, DateTime lastDeposit, double balance = 0)
		{
			Balance     = balance;
			LastDeposit = lastDeposit;
			AccountName = accountName;
			IsActive    = true;
		}

		public string GetAccountInfo()
		{
			return String.Format("{0}:  Balance: {1}. Last Deposit: {2}, IsActive: {3}",
				AccountName,
				Balance,
				LastDeposit,
				IsActive);
		}
	}
}