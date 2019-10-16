using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploJWT.Identity.Models
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Campo Usuario é obrigatorio")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Campo E-mail é obrigatorio")]
        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Campo Senha é obrigatorio")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Campo Senha e Confirmação de Senha são diferentes.")]
        public string ConfirmPassword { get; set; }
    }
}
