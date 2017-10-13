using System;

namespace Calculator
{
    public class SalaryCalculator
    {
        const int hourInYear = 2080;
        public decimal GetAnnualSalary(decimal hrWage)
        {
            decimal annualSalary = hourInYear * hrWage;
            return annualSalary;
        }

        public decimal GetHourlyWage1(int annualSalary)
        {
            return annualSalary / hourInYear;
        }

        public decimal GetHourlyWage(int annualSalary) => annualSalary / hourInYear;
    }
}
