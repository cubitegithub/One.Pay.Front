
using MailKit;
using MailKit.Net.Imap;
using MailKit.Search;
using MailKit.Security;
using MimeKit;
using System.Text.Json;

namespace One.Pay.Consola
{

    public class CorreoService
    {
        private readonly CorreoConfig _config;
        private readonly string _logFile = "CorreosProcesados.json";

        public CorreoService(CorreoConfig config)
        {
            _config = config;
        }

        public void Ejecutar()
        {
            // Cargar correos ya procesados para no repetir
            HashSet<string> procesados = CargarCorreosProcesados();

            using (var client = new ImapClient())
            {
                client.Connect(_config.ImapServer, _config.ImapPort, SecureSocketOptions.SslOnConnect);
                client.Authenticate(_config.Email, _config.Password);

                var inbox = client.Inbox;
                inbox.Open(FolderAccess.ReadOnly);

                var query = SearchQuery.DeliveredAfter(DateTime.Now.AddDays(-1));
                SearchQuery remitenteQuery = SearchQuery.FromContains(_config.RemitentesFiltrar[0]);
                for (int i = 1; i < _config.RemitentesFiltrar.Count; i++)
                    remitenteQuery = remitenteQuery.Or(SearchQuery.FromContains(_config.RemitentesFiltrar[i]));

                query = query.And(remitenteQuery);

                var uids = inbox.Search(query);

                Console.WriteLine($"Correos encontrados: {uids.Count}");

                foreach (var uid in uids)
                {
                    var message = inbox.GetMessage(uid);
                    string keyCorreo = $"{message.MessageId}|{message.Subject}|{message.Date}";

                    if (!procesados.Contains(keyCorreo))
                    {
                        string cuerpo = !string.IsNullOrEmpty(message.TextBody)
                            ? message.TextBody
                            : message.HtmlBody;

                        if (!string.IsNullOrEmpty(cuerpo))
                        {
                            Guardar(message.From.ToString(), "ONEBYTE", message.Date.DateTime, message.To.ToString(), message.Subject, cuerpo);
                            procesados.Add(keyCorreo);
                            Console.WriteLine("CORREO PROCESADO: " + message.Subject);
                        }
                    }
                }

                GuardarCorreosProcesados(procesados);
                client.Disconnect(true);
            }
        }

        private HashSet<string> CargarCorreosProcesados()
        {
            if (!File.Exists(_logFile)) return new HashSet<string>();
            return JsonSerializer.Deserialize<HashSet<string>>(File.ReadAllText(_logFile)) ?? new HashSet<string>();
        }

        private void GuardarCorreosProcesados(HashSet<string> procesados)
        {
            File.WriteAllText(_logFile, JsonSerializer.Serialize(procesados, new JsonSerializerOptions { WriteIndented = true }));
        }

        private void Guardar(string from, string empresa, DateTime fecha, string to, string asunto, string cuerpo)
        {
            // Aquí puedes guardar en base de datos o en archivos
            Console.WriteLine($"[LOG] {asunto} - {from} - {fecha}");
        }
    }

}
