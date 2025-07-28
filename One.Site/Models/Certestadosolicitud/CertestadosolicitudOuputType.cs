using Newtonsoft.Json;
using System.Text.Json.Serialization;
namespace One.Site.Models.Certestadosolicitud
{
   
    public class CertestadosolicitudOutputType
    {
		
		      
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertestadosolicitud { get; set; }
			
		
			
		[JsonPropertyName("Estado")]
        public string?  Estado { get; set; }
			
		
			
		[JsonPropertyName("Orden")]
        public int?  Orden { get; set; }
			
		
			
		[JsonPropertyName("Descripcion")]
        public string?  Descripcion { get; set; }
			
		       
        
    }
}
