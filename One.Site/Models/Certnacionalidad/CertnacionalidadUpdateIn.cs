using System.Text.Json.Serialization;

namespace One.Site.Models.Certnacionalidad
{
    public class CertnacionalidadUpdateIn
    {
		
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertnacionalidad { get; set; }			
		
			
		[JsonPropertyName("Nacionalidad")]
        public string?  Nacionalidad { get; set; }			
		   
 
    }
}
