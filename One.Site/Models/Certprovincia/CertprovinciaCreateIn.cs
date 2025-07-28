using System.Text.Json.Serialization;

namespace One.Site.Models.Certprovincia
{
    public class CertprovinciaCreateIn
    {
        
		
			
		[JsonPropertyName("id")]
        public string? Uidcertprovincia  { get; set; }			
		
			
		[JsonPropertyName("Codprovincia")]
        public int? Codprovincia  { get; set; }			
		
			
		[JsonPropertyName("Provincia")]
        public string? Provincia  { get; set; }			
		
			
		[JsonPropertyName("Codtelefonico")]
        public string? Codtelefonico  { get; set; }			
		   
		  
    }
}
