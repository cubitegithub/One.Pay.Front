using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
//using One.Site.Models.Login;
using One.Site.Utils;
using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
namespace One.Site
{
    public static class Extension
    {
        public static void AddHeaderDefault(this HttpRequestMessage objhttp, Dictionary<string, string>? headerIn)
        {
            if (objhttp is not null)
            {
                if (headerIn is not null && headerIn.Any())
                {
                    var url = objhttp.RequestUri is null ? "SinURL" : objhttp.RequestUri.ToString();
                    foreach (var item in headerIn)
                    {
                        if (objhttp.Headers.Any(x => x.Key == item.Key))
                        {
                            string error = string.Concat("Estás intentando ingresar en el Header un Key repetido, urlApi: ", url, " , Key: ", item.Key);
                            //     _logger.LogError(error);
                            throw new Exception(error);
                        }

                        objhttp.Headers.Add(item.Key, item.Value);
                    }
                }
            }
        }
        /// <summary>
        /// Obtiene del request el token desde el header y lo agrega al diccionario si es que no existe
        /// </summary>
        /// <param name="value"></param>
        /// <param name="request"></param>
        //public static void AddTokenHeader(this Dictionary<string, string> value, HttpRequest request)
        //{
        //    var tokenString = request.Headers["token"];

        //    if (value.ContainsKey("token"))
        //    {
        //        value.Add("token", tokenString);
        //    }

        //}
        public static void GetTokenContextSession(this HttpContext context, ControllerBase baseController, out string token)
        {
            token = string.Empty;

            //byte[]? valueByte = context.Session.Get(ValuesStatic.NameSessionApp);
            //if (valueByte != null)
            //{
            //    var tokenString = Encoding.UTF8.GetString(valueByte);
            //    try
            //    {
            //        UsuarioToken? obj = JsonConvert.DeserializeObject<UsuarioToken>(tokenString);
            //        if (obj is not null)
            //        {
            //            token = obj.token;
            //        }
            //    }
            //    catch (Exception ex)
            //    {

            //    }
            //}  
        }

        #region Token Metodos
        private static string GetToken(HttpContext context, ControllerBase baseController, out ObjectResult? objResult)
        {
            string token = string.Empty;

            //byte[]? valueByte = context.Session.Get(ValuesStatic.NameSessionApp);
            //if (valueByte != null && valueByte.Any())
            //{
            //    var tokenString = Encoding.UTF8.GetString(valueByte);
            //    try
            //    {
            //        UsuarioToken? obj = JsonConvert.DeserializeObject<UsuarioToken>(tokenString);
            //        if (obj is not null)
            //        {
            //            token = obj.token;
            //        }
            //    }
            //    catch (Exception ex)
            //    {

            //    }
            //}

            //if (string.IsNullOrEmpty(token))
            //{
            //    objResult = baseController.StatusCode(StatusCodes.Status401Unauthorized, "");
            //}
            //else
            //{
               objResult = null;
            //}
            //context.Session.Remove(ValuesStatic.NameSessionApp);

            return token;
        }
        public static string GetUsuarioToken(string token)
        {
            string uidusuario = string.Empty;
            try
            {
                if (!token.Contains(".")) // es token en base64
                {
                    token = (token.Contains("Bearer") ? token.Replace("Bearer", "").Trim() : token).Base64Decode();
                }
                var handler = new JwtSecurityTokenHandler();
                var jsonToken = handler.ReadToken(token);
                var tokenS = handler.ReadToken(token) as JwtSecurityToken;

                var identityUser = tokenS.Claims.First(claim => claim.Type == "identityUser").Value;
                uidusuario = identityUser;

            }
            catch (Exception exc)
            {

            }
            return uidusuario;
        }
        public static string GetTokenContextSession(this HttpContext context, ControllerBase baseController, out ObjectResult? objResult)
        {
            string token = string.Empty;

            token = GetToken(context, baseController, out objResult);

            return token;
        }


        public static string GetUidUserTokenContextSession(this HttpContext context, ControllerBase baseController, out ObjectResult? objResult)
        {
            string token = string.Empty;

            token = GetToken(context, baseController, out objResult);

            return GetUsuarioToken(token);
        }
      
        #endregion Token Metodos



        public static string HttpHeaderByKey(this string value,string nameCookie)
        {
            string ret = string.Empty;
            if(!string.IsNullOrEmpty(value))
            {
                try
                {
                    var result = value.Split(';').FirstOrDefault(x => x.Split('=')[0].Trim() == nameCookie);
                    if (!string.IsNullOrEmpty(result))
                    {
                        ret = (result + "=").Split('=')[1].Trim();
                    }
                }catch(Exception ex)
                {

                }
            }

            return ret;
        }

        public static string Base64Encode(this string value)
        { 
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(value));
        }
        public static string Base64Decode(this string value)
        { 
            return  Encoding.UTF8.GetString(Convert.FromBase64String(value));
        }
    }
}
