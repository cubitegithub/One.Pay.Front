using System.Text.Json.Serialization;

namespace One.Site.Models.Certvigencia
{
    public class CertvigenciaUpdateIn
    {
		
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertvigencia { get; set; }			
		
			
		[JsonPropertyName("Orden")]
        public int?  Orden { get; set; }			
		
			
		[JsonPropertyName("Uidcertsolicitudtipo")]
        public string?  Uidcertsolicitudtipo { get; set; }			
		
			
		[JsonPropertyName("Vigencia")]
        public string?  Vigencia { get; set; }			
		
			
		[JsonPropertyName("Preciosinimpuestos")]
        public decimal?  Preciosinimpuestos { get; set; }			
		   
 
    }
}
