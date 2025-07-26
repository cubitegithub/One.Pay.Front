using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace One.Pay.Consola
{
    public class CorreoConfig
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ImapServer { get; set; }
        public int ImapPort { get; set; }
        public int IntervaloMinutos { get; set; }
        public List<string> RemitentesFiltrar { get; set; }
    }

}
