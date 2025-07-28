using Newtonsoft.Json;
using System.Text.Json.Serialization;
namespace One.Site.Models.Certsolicitudtipo
{
   
    public class CertsolicitudtipoOutputType
    {
		
		      
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertsolicitudtipo { get; set; }
			
		
			
		[JsonPropertyName("Orden")]
        public int?  Orden { get; set; }
			
		
			
		[JsonPropertyName("Tiposolicitud")]
        public string?  Tiposolicitud { get; set; }
			
		
			
		[JsonPropertyName("Nombrecorto")]
        public string?  Nombrecorto { get; set; }
			
		
			
		[JsonPropertyName("Descripcion")]
        public string?  Descripcion { get; set; }
			
		       
        
    }
}
