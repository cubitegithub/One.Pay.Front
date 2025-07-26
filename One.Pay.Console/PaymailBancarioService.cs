using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
namespace One.Pay.Consola
{


    public class PaymailBancarioService
    {
        private readonly string _baseUrl;

        public PaymailBancarioService(string baseUrl)
        {
            _baseUrl = baseUrl;
        }

        public async Task<string> CrearAsync(PaymailBancarioRequest request)
        {
            using var handler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => true
            };

            using var client = new HttpClient(handler);
            client.DefaultRequestHeaders.Add("accept", "application/json");                                     

            string jsonData = JsonSerializer.Serialize(request);
            var content = new StringContent(jsonData, Encoding.UTF8, "application/json");

            HttpResponseMessage response = await client.PostAsync($"{_baseUrl}/one-api/v1/Paymailbancario/Create", content);

            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsStringAsync();
            }
            else
            {
                string errorResponse = await response.Content.ReadAsStringAsync();
                throw new Exception($"Error {response.StatusCode}: {errorResponse}");
            }
        }
    }
}
