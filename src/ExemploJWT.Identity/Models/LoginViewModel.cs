using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploJWT.Identity.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Campo Usuario é obrigatorio")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Campo Senha é obrigatorio")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}