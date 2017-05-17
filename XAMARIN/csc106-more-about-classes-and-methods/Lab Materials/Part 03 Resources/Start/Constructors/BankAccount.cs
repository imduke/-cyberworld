using System;

namespace Constructors
{
	public class BankAccount
	{
		public double   Balance     { get; set; }
		public DateTime LastDeposit { get; set; }
		public bool     IsActive    { get; set; }
		public string   AccountName { get; set; }

		// TODO: add constructors

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