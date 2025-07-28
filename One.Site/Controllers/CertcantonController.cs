using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using One.Site.Implementation;
using One.Site.Models.Certcanton;
using One.Site.Security;
using One.Site.Services;
using System.Text.Json;

namespace One.Site.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertcantonController : ControllerBase
    {
        private readonly ILogger<CertcantonController> _logger;
        private readonly IApiConsumo _apiConsumo;
        public CertcantonController(ILogger<CertcantonController> logger, IApiConsumo apiConsumo)
        {
            _logger = logger;
            _apiConsumo = apiConsumo;
        }



        [ActionFilterToken]
        [HttpPost("GetSelectValue")]
        public ActionResult<List<CertcantonOutputType>> PostSelectValue()
        {
            string methodUrl = $"Certcanton/GetAll";
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

                var resultObj = JsonSerializer.Deserialize<List<CertcantonOutputType>>(resultTestObj);

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
        [HttpPost("GetSelectValueByIdProvincia/{id}")]
        public ActionResult<List<CertcantonOutputType>> GetSelectValueByIdProvincia([FromRoute] string id)
        {
            string methodUrl = $"Certcanton/GetSelectValueByIdProvincia/{Uri.EscapeDataString(id.Trim())}";
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
                var resultObj = JsonSerializer.Deserialize<List<CertcantonOutputType>>(resultTestObj);

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

    }

}