using Microsoft.AspNetCore.Mvc;
using SumIntegerWebApi.Models;

namespace SumIntegerWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddController : ControllerBase
    {
        public int Post(SumIntegerModel model)
        {
            return model.FirstNumber + model.SecondNumber;
        }
    }
}
