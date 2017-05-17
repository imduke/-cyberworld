using System;

namespace OutParameters
{
	public class Bank
	{
		public bool GetAccountInfo(string accountNumber, out double balance, out DateTime lastDeposit)
		{
			// pretend there's code to look up account based on accountNumber

			balance = 24127.84;
			lastDeposit = new DateTime(2014, 11, 22, 14, 35, 20);

			bool isActive = true;
			return isActive;
		}
	}
}