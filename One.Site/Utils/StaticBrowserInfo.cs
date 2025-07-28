using System;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;

namespace One.Site.Utils
{
    public static class StaticBrowserInfo
    {
       

       
        //private static string ExtractBrowserVersion(string userAgent, string browserName)
        //{
        //    var match = Regex.Match(userAgent, $"{browserName}/([0-9.]+)");
        //    return match.Success ? $"{browserName} {match.Groups[1].Value}" : browserName;
        //}
        //public static string GetBrowserName(IHeaderDictionary Headers)
        //{
            
        //    string userAgent = "";
        //    string ret = "Desconocido";
        //    try
        //    {
             
        //        userAgent =  Headers["User-Agent"].ToString();

        //        if (userAgent.Contains("Edg"))
        //            ret = ExtractBrowserVersion(userAgent, "Edg");
        //        if (userAgent.Contains("OPR") || userAgent.Contains("Opera"))
        //            ret = ExtractBrowserVersion(userAgent, "OPR|Opera");
        //        if (userAgent.Contains("Chrome") && !userAgent.Contains("Edg"))
        //            ret = ExtractBrowserVersion(userAgent, "Chrome");
        //        if (userAgent.Contains("Firefox"))
        //            ret = ExtractBrowserVersion(userAgent, "Firefox");
        //        if (userAgent.Contains("Safari") && !userAgent.Contains("Chrome"))
        //            ret = ExtractBrowserVersion(userAgent, "Safari");
        //        if (userAgent.Contains("MSIE") || userAgent.Contains("Trident"))
        //            ret = ExtractBrowserVersion(userAgent, "MSIE|rv");

        //    }
        //    catch (Exception e)
        //    {
                
        //    }

        //    return userAgent;
        //}

      
        //public static string GetIpAddresClient(HttpContext HttpContext)
        //{
        //    var ipAddress = "";
        //    try
        //    {
            
        //        ipAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
        //    }
        //    catch (Exception exc)
        //    {

        //    }

        //    // Si tu aplicación está detrás de un proxy, como Nginx o AWS ELB,
        //    // la IP real podría estar en el encabezado X-Forwarded-For.
        //    var forwardedIp = "";
        //    try
        //    {
               
        //        forwardedIp = HttpContext.Request.Headers["X-Forwarded-For"].FirstOrDefault();
        //    }
        //    catch (Exception exc)
        //    {

        //    }


        //    if (!string.IsNullOrEmpty(forwardedIp))
        //    {
        //        ipAddress = forwardedIp;
        //    }
 

        //    return ipAddress;

        //}


    }
}
