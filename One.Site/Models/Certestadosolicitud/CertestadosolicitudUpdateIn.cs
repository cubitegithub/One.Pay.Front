using System.Text.Json.Serialization;

namespace One.Site.Models.Certestadosolicitud
{
    public class CertestadosolicitudUpdateIn
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
