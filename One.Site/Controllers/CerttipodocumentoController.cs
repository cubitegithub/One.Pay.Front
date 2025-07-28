using Microsoft.AspNetCore.Mvc; 
using One.Site.Implementation;
using One.Site.Models.Certtipodocumento; 
using One.Site.Security;
using One.Site.Services; 
using System.Text.Json; 

namespace One.Site.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CerttipodocumentoController : ControllerBase
    {
        private readonly ILogger<CerttipodocumentoController> _logger;
        private readonly IApiConsumo _apiConsumo;
        public CerttipodocumentoController(ILogger<CerttipodocumentoController> logger, IApiConsumo apiConsumo)
        {
            _logger = logger;
            _apiConsumo = apiConsumo;
        }
   
        
        [ActionFilterToken]
        [HttpPost("GetAll")]
        public ActionResult<List<CerttipodocumentoOutputType>> Post()
        {
             
            string methodUrl = $"Certtipodocumento/GetAll";
           
            try
            {
               
                ObjectResult? objectResult= null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if(objectResult!= null)
                {
                    return objectResult;
                }  

                var resultTestObj = _apiConsumo.GetAsync(methodUrl, token, new Dictionary<string, string>()).Result;

                var resultObj = JsonSerializer.Deserialize<List<CerttipodocumentoOutputType>>(resultTestObj);

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No existen resgistros!");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }

 [ActionFilterToken]
   [HttpPost("GetSelectValue")]
   public ActionResult<List<CerttipodocumentoOutputType>> PostSelectValue()
   {
       string methodUrl = $"Certtipodocumento/GetAll";
       Dictionary<string, string> _dicc = new Dictionary<string, string>(); 
       try
       {
           ObjectResult? objectResult = null;
           string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
           if (objectResult != null)
           {
               return objectResult;
           }

           var resultTestObj = _apiConsumo.GetAsync(methodUrl, token, _dicc).Result;

           var resultObj = JsonSerializer.Deserialize<List<CerttipodocumentoOutputType>>(resultTestObj);

           if (resultObj == null)
           {
               return StatusCode(StatusCodes.Status404NotFound, "No existen registros!");
           }
           else
           {
               return StatusCode(StatusCodes.Status200OK, resultObj);
           }
       }
       catch (Exception exc)
       {
           return StatusCode(StatusCodes.Status404NotFound, exc);
       }
   }


        [ActionFilterToken]
        [HttpDelete("Delete/{*id}")]
        public ActionResult<string> Delete([FromRoute] string id)
        {
            string methodUrl = $"Certtipodocumento/Delete/" + id;
             

            try
            {

                ObjectResult? objectResult = null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if (objectResult != null)
                {
                    return objectResult;
                }

                var resultObj = _apiConsumo.Delete(methodUrl, token, new Dictionary<string, string>()).Result;

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No se ha eliminado!");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }


        [ActionFilterToken]
        [HttpPost("Create")]
        public ActionResult<string> Create([FromBody] CerttipodocumentoCreateIn modelIn)
        {

            string methodUrl = $"Certtipodocumento/Create";
            modelIn.Uidcerttipodocumento = Guid.NewGuid().ToString();
            try
            {
                ObjectResult? objectResult = null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if (objectResult != null)
                {
                    return objectResult;
                }
 

                var resultTestObj = _apiConsumo.Post(methodUrl, token, modelIn).Result;

                var resultObj = resultTestObj;

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No se pudo insertar el registro!");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }

        [ActionFilterToken]
        [HttpPost("GetById/{*id}")]
        public ActionResult<CerttipodocumentoOutputType> GetById([FromRoute] string id)
        {
            string methodUrl = $"Certtipodocumento/GetById/" + id;
       
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

                var resultObj = JsonSerializer.Deserialize<CerttipodocumentoOutputType>(resultTestObj);

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No se ha encontrado coincidencia!");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }

        [ActionFilterToken]
        [HttpPost("GetSelectValueByIdTipoSolicitud/{*id}")]
        public ActionResult<CerttipodocumentoOutputType> GetSelectValueByIdTipoSolicitud([FromRoute] string id)
        {
            string methodUrl = $"Certtipodocumento/GetSelectValueByIdTipoSolicitud/{Uri.EscapeDataString(id.Trim())}";
            var _dicc = new Dictionary<string, string>();

            try
            {
                ObjectResult? objectResult = null;
                string token = this.HttpContext.GetTokenContextSession(this, out objectResult);
                if (objectResult != null)
                {
                    return objectResult;
                }

                var resultTestObj = _apiConsumo.GetAsync(methodUrl, token, _dicc).Result;
                var resultObj = JsonSerializer.Deserialize<List<CerttipodocumentoOutputType>>(resultTestObj);

                if (resultObj == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "No existen registros!");
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }


        [ActionFilterToken]
        [HttpPut("Modify")]
        public ActionResult<string> Modify([FromBody] CerttipodocumentoUpdateIn modelout)
        {
            string methodUrl = $"Certtipodocumento/Modify";
         
             
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
                    return StatusCode(StatusCodes.Status200OK, resultObj);
                }
            }
            catch (Exception exc)
            {
                return StatusCode(StatusCodes.Status404NotFound, exc);
            }
        }
    }

}