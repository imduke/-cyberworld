using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Calculator;

namespace SalaryCalculatorTestProject
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void AnnualSalaryTest()
        {
            //ARRANGE
            SalaryCalculator Sc = new SalaryCalculator();


            //ACT
            decimal annualSalary = Sc.GetAnnualSalary(50);


            //Assert
            Assert.AreEqual(104000, annualSalary);
        }

        [TestMethod]
        public void HourlyWageTestTest()
        {
            //ARRANGE
            SalaryCalculator Sc = new SalaryCalculator();


            //ACT
            decimal hourlySalary = Sc.GetHourlyWage(52000);


            //Assert
            Assert.AreEqual(25, hourlySalary);
        }
    }
}
