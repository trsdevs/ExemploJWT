using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExemploJWT.Controllers
{
    [Authorize]
    [Route("api")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("home")]
        public async Task<string> Index()
        {
            return "Voce esta conectado!";
        }
    }
}