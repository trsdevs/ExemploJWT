using System;
using System.Collections.Generic;
using System.Text;

namespace ExemploJWT.Identity
{
    public class JwtSettings
    {
        public const string Key = "UMSEGREDOLEGALSUPERSECRETO";
        public const int Expire = 1;
        public const string Issuer = "Aplicacao";
        public const string Audience = "http://localhost" ;
    }
}
