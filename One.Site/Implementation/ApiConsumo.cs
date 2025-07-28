using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using One.Site.Implementation;
using One.Site.Services;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.Json;

namespace One.Site.Implementation
{
    public class ApiConsumo: IApiConsumo
    {
        private readonly string UrlBase;
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        public ApiConsumo(IConfiguration configuration)
        {
            _configuration = configuration;
            UrlBase = _configuration.GetValue<string>("ApiUrlBase");   


            _httpClient = new HttpClient();
            //  _logger = Logger<ApiConsumo>;

        }

        public async Task<string> Get(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null)
        {
            string urlApi = string.Concat(UrlBase, methodUrl);


            string contentResponse = "";

            using (var requestMessage = new HttpRequestMessage(HttpMethod.Get, urlApi))
            {
                requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                if (!string.IsNullOrEmpty(tokenAuth))
                {
                    tokenAuth = tokenAuth.Base64Encode();
                }
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokenAuth);
                requestMessage.AddHeaderDefault(headerIn);

                var responseMessage = await _httpClient.SendAsync(requestMessage);
                responseMessage.EnsureSuccessStatusCode();
                contentResponse = await responseMessage.Content.ReadAsStringAsync();

            }
            return contentResponse;
        }

        public async Task<string> GetAsync(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null)
        {
            var responseString = await Get(methodUrl, tokenAuth, headerIn);
            //  T? response = JsonSerializer.Deserialize<T>(responseString);
            return responseString;
        }

        // public  T? Get<T>(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null)
        // {
        //     var responseString =  Get(methodUrl, tokenAuth, headerIn);
        ////     T? response = JsonSerializer.Deserialize<T>(responseString);
        //     return response;
        // }

        public async Task<string> Delete(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null)
        {
            string contentResponse = "";
            string urlApi = string.Concat(UrlBase, methodUrl);
            using (var requestMessage = new HttpRequestMessage(HttpMethod.Delete, urlApi))
            {
                requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                if (!string.IsNullOrEmpty(tokenAuth))
                {
                    tokenAuth = tokenAuth.Base64Encode();
                }
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokenAuth);
                requestMessage.AddHeaderDefault(headerIn);

                var responseMessage = await _httpClient.SendAsync(requestMessage);
                responseMessage.EnsureSuccessStatusCode();
                contentResponse = await responseMessage.Content.ReadAsStringAsync();

            }
            return contentResponse;
        }


        public async Task<string> Post<T>(string methodUrl, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null)
        {
            string contentResponse = "";
            string urlApi = string.Concat(UrlBase, methodUrl);
            using (var requestMessage = new HttpRequestMessage(HttpMethod.Post, urlApi))
            {
                requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                if (!string.IsNullOrEmpty(tokenAuth))
                {
                    tokenAuth = tokenAuth.Base64Encode();
                }
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokenAuth);

                requestMessage.AddHeaderDefault(headerIn);

                string requestString = JsonSerializer.Serialize(entity);

                requestMessage.Content = new StringContent(requestString, Encoding.UTF8);
                requestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                var responseMessage = await _httpClient.SendAsync(requestMessage);
                responseMessage.EnsureSuccessStatusCode();
                contentResponse = await responseMessage.Content.ReadAsStringAsync();

            }
            return contentResponse;
        }

        public async Task<string> PostUrlGeneric<T>(string methodUrlGeneric, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null)
        {
            string contentResponse = "";
            string urlApi = methodUrlGeneric;
            using (var requestMessage = new HttpRequestMessage(HttpMethod.Post, urlApi))
            {
                requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                if (!string.IsNullOrEmpty(tokenAuth))
                {
                    tokenAuth = tokenAuth.Base64Encode();
                }
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokenAuth);

                requestMessage.AddHeaderDefault(headerIn);

                string requestString = JsonSerializer.Serialize(entity);

                requestMessage.Content = new StringContent(requestString, Encoding.UTF8);
                requestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                var responseMessage = await _httpClient.SendAsync(requestMessage);
                responseMessage.EnsureSuccessStatusCode();
                contentResponse = await responseMessage.Content.ReadAsStringAsync();

            }
            return contentResponse;
        }
        public async Task<string> Put<T>(string methodUrl, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null)
        {
            string contentResponse = "";
            string urlApi = string.Concat(UrlBase, methodUrl);
            using (var requestMessage = new HttpRequestMessage(HttpMethod.Put, urlApi))
            {
                requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                if (!string.IsNullOrEmpty(tokenAuth))
                {
                    tokenAuth = tokenAuth.Base64Encode();
                }
                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", tokenAuth);

                requestMessage.AddHeaderDefault(headerIn);

                string requestString = JsonSerializer.Serialize(entity);

                requestMessage.Content = new StringContent(requestString, Encoding.UTF8);
                requestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                var responseMessage = await _httpClient.SendAsync(requestMessage);
                responseMessage.EnsureSuccessStatusCode();
                contentResponse = await responseMessage.Content.ReadAsStringAsync();

            }
            return contentResponse;
        }

        //public void Put()
        //{
        //    using (var client = new HttpClient())
        //    {
        //        person p = new person { name = "Sourav", surname = "Kayal" };
        //        client.BaseAddress = new Uri("http://localhost:1565/");
        //        var response = client.PutAsJsonAsync("api/person", p).Result;
        //        if (response.IsSuccessStatusCode)
        //        {
        //            Console.Write("Success");
        //        }
        //        else
        //            Console.Write("Error");
        //    }
        //}

    }
}
