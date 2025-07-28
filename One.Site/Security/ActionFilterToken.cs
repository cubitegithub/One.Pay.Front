using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;     
using One.Site.Utils;
using System.Net.Http.Headers;
using System.Text;

namespace One.Site.Security
{
    public class ActionFilterToken : ActionFilterAttribute
    {

        public ActionFilterToken()
        {

        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            ////UsuarioToken 

            //string? tokenCookies = context.HttpContext.Request.Headers["Cookie"]; // [ValuesStatic.NameCookiesApp];
            //string cookie = tokenCookies.HttpHeaderByKey(ValuesStatic.NameCookiesApp);

            //context.HttpContext.Session.Remove(ValuesStatic.NameSessionApp);
            //if (!string.IsNullOrEmpty(cookie))
            //{
            //    context.HttpContext.Session.Set(ValuesStatic.NameSessionApp, Encoding.UTF8.GetBytes(cookie));
            //}
        }
    }
}
