using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace One.Pay.Consola
{
    public class PaymailBancarioRequest
    {
        public string Id { get; set; }
        public string Uidmailconfigserver { get; set; }
        public string Asunto { get; set; }
        public string Cuerpohtml { get; set; }
        public string Maildestinatarios { get; set; }
        public string Mailcopias { get; set; }
        public string Mailocultos { get; set; }
        public DateTime Fechacorreo { get; set; }
        public DateTime Fechaconsulta { get; set; }
        public string Banconumtransaccion { get; set; }
        public decimal Bancovalor { get; set; }
        public DateTime Bancofechatransaccion { get; set; }
        public string Cuerpotexto { get; set; }
        public string Mailcuentapertenecea { get; set; }
        public string Mailorigen { get; set; }
    }

}
