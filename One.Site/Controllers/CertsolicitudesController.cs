using Microsoft.AspNetCore.Mvc;
using One.SendEmail.Client;
using One.Site.Implementation;
using One.Site.Models.Certsolicitudes; 
using One.Site.Security;
using One.Site.Services;
using One.Site.Utils;
using System.Text.Json; 

namespace One.Site.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertsolicitudesController : ControllerBase
    {
        private readonly ILogger<CertsolicitudesController> _logger;
        private readonly IApiConsumo _apiConsumo;
        public CertsolicitudesController(ILogger<CertsolicitudesController> logger, IApiConsumo apiConsumo)
        {
            _logger = logger;
            _apiConsumo = apiConsumo;
        }
            

        [ActionFilterToken]
        [HttpPost("GetById/{*id}")]
        public ActionResult<CertsolicitudesOutputType> GetById([FromRoute] string id)
        {
            string methodUrl = $"Certsolicitudes/GetById/" + id;
       
            try
            {
                #region ValidationSessionToken
                ObjectResult? objectResult = null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if (objectResult != null)
                {
                    return objectResult;
                }
                #endregion

                var resultTestObj = _apiConsumo.GetAsync(methodUrl, token).Result;

                var resultObj = JsonSerializer.Deserialize<CertsolicitudesOutputType>(resultTestObj);

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No se ha encontrado coincidencia!");
                }
                
                if (resultObj.Uidcertestadosolicitud != "7985e6fb-a395-402e-8a63-6be98457b94d")
                {
                    // Retornar código 403 Forbidden con mensaje de redirección (o 409 o 400, según tu lógica)
                    return StatusCode(409, new { redirect = "/solicitudNoDisponible" });
                }

                return Ok(resultObj);
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }
    
        
        [ActionFilterToken]
        [HttpPut("Modify")]
        public ActionResult<string> Modify([FromBody] CertsolicitudesUpdateIn modelout)
        {
            string methodUrl = $"Certsolicitudes/Modify";
         
             
            try 
            {
                #region ValidationSessionToken
                ObjectResult? objectResult = null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if (objectResult != null)
                {
                    return objectResult;
                }
                #endregion
              
                var resultTestObj = _apiConsumo.Put(methodUrl, token, modelout).Result;

                var resultObj = resultTestObj;
                
                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No se pudo actualizar el registro!");
                }
                else
                {
                    try
                    {                      

                        List<string> Destinatarios = new List<string>()
                    {
                         string.Concat(modelout.Email,"|" ,modelout.Uidrvperfperfil)
                    };


                        Task.Run(() =>
                        {
                            try
                            {
                                NotificarSolicitudCreacion(Destinatarios, modelout);
                            }
                            catch (Exception exCorreo)
                            {
                                // Opcional: loguear el error del envío de correo
                            }
                        });
                    }
                    catch (Exception exc)
                    {

                    }

                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }

        private void NotificarSolicitudCreacion(List<string> Destinatarios, CertsolicitudesUpdateIn type)
        {

            var ObjNotifi = new
            {
                System = new
                {
                    Fecha = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                    IpRequest = "",
                    browserName = "",
                },
                Data = type
            };


            string Correos = string.Join(",", Destinatarios);

            var resultado = OneSendEmailNotification.Send(StaticValueNotificacionEmail.ApiUrl,
                StaticValueNotificacionEmail.ServerAddressMailAlias,
                StaticValueNotificacionEmail.ServerAddresName,
              Correos,
              (StaticValueNotificacionEmail.NotificacionEditarSolicitud_Asunto + " " + string.Join(" ", type.Apellidopaterno, type.Apellidomaterno, type.Nombre1, type.Nombre2) ),
              StaticValueNotificacionEmail.NotificacionEditarSolicitud_Cuerpo, ObjNotifi).Result;
            
        }
    }

}