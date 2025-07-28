using System.Text.Json.Serialization;

namespace One.Site.Models.Certtipodocumento
{
    public class CerttipodocumentoUpdateIn
    {
		
		
			
		[JsonPropertyName("id")]
        public string?  Uidcerttipodocumento { get; set; }			
		
			
		[JsonPropertyName("Uidcertsolicitudtipo")]
        public string?  Uidcertsolicitudtipo { get; set; }			
		
			
		[JsonPropertyName("Tipodocumento")]
        public string?  Tipodocumento { get; set; }			
		   
 
    }
}
