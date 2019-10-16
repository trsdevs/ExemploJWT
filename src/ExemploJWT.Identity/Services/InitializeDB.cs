using ExemploJWT.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExemploJWT.Identity.Services
{
    public class InitializeDB
    {
        private readonly JwtIdentityContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public InitializeDB(JwtIdentityContext context
            , UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public void Init()
        {
            _context.Database.Migrate();

            var admUser = new IdentityUser()
            {
                UserName = "admin",
                Email = "admin@teste.com",
                EmailConfirmed = true
            };

            if (_userManager.FindByNameAsync(admUser.UserName).Result == null)
            {
                var resultado = _userManager.CreateAsync(admUser, "Senha@2019").Result;
            }
        }
    }
}