using Microsoft.VisualStudio.TestTools.UnitTesting;
using SumIntegerWebApi.Controllers;
using SumIntegerWebApi.Models;

namespace SumIntegerTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var controller = new AddController();
            int expactedResult = 30;
            var model = new SumIntegerModel
            {
                FirstNumber = 10,
                SecondNumber = 20,
            };
            var result = controller.Post(model);
            Assert.AreEqual(expactedResult, result);
        }
    }
}