
using Microsoft.Extensions.Configuration;
using One.Pay.Consola;

static void Main(string[] args)
{
    var configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

    var config = configuration.GetSection("CorreoConfig").Get<CorreoConfig>();
    var servicio = new CorreoService(config);

    while (true)
    {
        Console.WriteLine($"[INFO] Ejecutando consulta de correos: {DateTime.Now}");
        servicio.Ejecutar();
        Thread.Sleep(TimeSpan.FromMinutes(config.IntervaloMinutos));
    }
}


   /*

using System;
using System.Net.Mail;
using MailKit;
using MailKit.Net.Imap;
using MailKit.Search;
using MailKit.Security;
using MimeKit;
using One.Pay.Consola;
using HtmlAgilityPack;
using System.Text.RegularExpressions;
using System.Net;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.Metadata;
using System.Reflection;
class Program
{
    static void Main(string[] args)
    {
        string email = "info@onebyte.com.ec";
        string password = "Info$onebyte2021"; // contraseña del correo
        string imapServer = "imap.titan.email"; // o imap.onebyte.com.ec
        int imapPort = 993; // Puerto estándar SSL

        DateTime ultimaEjecucion = new DateTime(2025, 7, 24, 0, 0, 0); // fecha-hora última ejecución

        using (var client = new ImapClient())
        {
            client.Connect(imapServer, imapPort,SecureSocketOptions.SslOnConnect);
            client.Authenticate(email, password);

            var inbox = client.Inbox;
            inbox.Open(FolderAccess.ReadOnly);

            // Filtro general por fecha (un día antes y después de la última ejecución)
            var query = SearchQuery.DeliveredAfter(ultimaEjecucion.AddDays(-1))    
             .And(
        SearchQuery.FromContains("banco@pichincha.com")
        .Or(SearchQuery.FromContains("intermail@bancopacifico.ec"))
        .Or(SearchQuery.FromContains("bancaenlinea@produbanco.com"))
        .Or(SearchQuery.FromContains("bancaonline@bancointernacional.ec"))
        .Or(SearchQuery.FromContains("bancavirtual@bancoguayaquil.com"))
    );

            var uids = inbox.Search(query);

            Console.WriteLine($"Correos encontrados: {uids.Count}");

            foreach (var uid in uids)
            {
                var message = inbox.GetMessage(uid);

                // Filtrar por hora exacta posterior a la última ejecución
                if (message.Date.DateTime > ultimaEjecucion)
                {
                    string cuerpo = !string.IsNullOrEmpty(message.TextBody)
                                    ? message.TextBody
                                    : message.HtmlBody;

                    // Filtro adicional: buscar "plan de cuenta" en el cuerpo
                    if (!string.IsNullOrEmpty(cuerpo))
                    {

                        Guardar(message.From.ToString(), "ONEBYTE", message.Date.DateTime, message.To.ToString(), message.Subject, cuerpo ?? "[Sin contenido disponible]");
                        Console.WriteLine("=======================================");
                        Console.WriteLine($"Asunto: {message.Subject}");
                        Console.WriteLine($"De: {message.From}");
                        Console.WriteLine($"Fecha: {message.Date}");
                        Console.WriteLine("--------- CUERPO DEL CORREO -----------");
                        //Console.WriteLine(cuerpo ?? "[Sin contenido disponible]");
                        Console.WriteLine("sI SE ENCONTRO EL PAGO");
                        Console.WriteLine("=======================================\n");
                    }
                    else
                    {
                        Console.WriteLine("no SE ENCONTRO EL PAGO");
                    }
                }
            }

            client.Disconnect(true);

        }
        Console.ReadLine();
    }

   

    public static string HtmlToPlainText(string html)
    {
        if (string.IsNullOrWhiteSpace(html))
            return string.Empty;

        // Cargar el HTML en HtmlAgilityPack
        var doc = new HtmlDocument();
        doc.LoadHtml(html);

        // Remover <script> y <style> completamente
        doc.DocumentNode.Descendants()
            .Where(n => n.Name == "script" || n.Name == "style")
            .ToList()
            .ForEach(n => n.Remove());

        // Extraer el texto plano
        string textoPlano = doc.DocumentNode.InnerText;

        // Decodificar entidades HTML (ej. &nbsp;)
        string htmlString = WebUtility.HtmlDecode(textoPlano).Trim();
        // Dividir el texto usando espacios, saltos de línea, tabulaciones o retornos de carro
        string[] partes = Regex.Split(htmlString, @"\s+"); // \s cubre espacio, \n, \r, \t
        partes = partes.Where(x => !x.Contains("\"") && !x.Contains("<") && !x.Contains(">") &&  !FiltroPalabrasExclusion().Contains(x)).ToArray();
// Eliminar cadenas vacías y volver a unir con un espacio
htmlString = string.Join("\n", partes);



        return htmlString;
    }

    static async void Guardar(string correoOrigen, string NombreEmpresaBeneficiaria,DateTime _fechacorreo, string _maildestinatarios,string _asunto, string _cuerpoHtml)
    {
        var service = new PaymailBancarioService("https://localhost:5105");

        #region Capa para descomponer los datos delcorreo y segmentarlo en el model a guardar
        #endregion

        var nuevo = new PaymailBancarioRequest
        {
            Id = Guid.NewGuid().ToString(),
            Uidmailconfigserver = "string",
            Asunto = _asunto,
            Cuerpohtml = _cuerpoHtml,
            Maildestinatarios = _maildestinatarios,
            Mailcopias = "",
            Mailocultos = "",
            Fechacorreo = _fechacorreo,
            Fechaconsulta = DateTime.UtcNow,
            Banconumtransaccion = "",
            Bancovalor = 0,
            Bancofechatransaccion = DateTime.UtcNow,
            Cuerpotexto = HtmlToPlainText(_cuerpoHtml),
            Mailcuentapertenecea = NombreEmpresaBeneficiaria,
            Mailorigen = correoOrigen
        };

        try
        {
            var resultado = await service.CrearAsync(nuevo);
            Console.WriteLine("Respuesta del API: " + resultado);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
    }


    static List<string> FiltroPalabrasExclusion()
    {
        List<string> filtro = new List<string>();
        filtro.Add("html");
        filtro.Add("PUBLIC");
        filtro.Add("XHTML");
        filtro.Add("Start");
        filtro.Add("of");
        filtro.Add("main-banner");
        filtro.Add("image");
        filtro.Add("end");
        filtro.Add("End");
        filtro.Add("realizó");
        filtro.Add("correctamente");
        filtro.Add("se");
        filtro.Add("La");
        filtro.Add("Detalle");
        filtro.Add("se");
        filtro.Add("correctamente.");
        filtro.Add("footer");
        filtro.Add("Footer");
        filtro.Add("postfooter");
        filtro.Add("Spacing");
        filtro.Add("Nota");
        filtro.Add("descargo:");
        filtro.Add("confidencial");
        filtro.Add("por");
        filtro.Add("ser");
        filtro.Add("<");
        filtro.Add(">");
        filtro.Add("!");
        filtro.Add("<!--");
        filtro.Add("-->");
        filtro.Add("main-content");
        filtro.Add("");
        filtro.Add("de");
        filtro.Add("este");
        filtro.Add("y");
        filtro.Add("sólo");
        filtro.Add("utilizada");
        filtro.Add("individuo");
        filtro.Add("o");
        filtro.Add("la");
        filtro.Add("compañía");
        filtro.Add("xxxxxxxx");
        filtro.Add("xxxxxxxx");
        filtro.Add("xxxxxxxx");
        filtro.Add("xxxxxxxx");





        return filtro;
    }
}

*/