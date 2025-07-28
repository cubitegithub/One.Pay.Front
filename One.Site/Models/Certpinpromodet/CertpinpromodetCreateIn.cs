using System.Text.Json.Serialization;

namespace One.Site.Models.Certpinpromodet
{
    public class CertpinpromodetCreateIn
    {
        
		
			
		[JsonPropertyName("id")]
        public string? Uidcertpinpromodet  { get; set; }			
		
			
		[JsonPropertyName("Uidcertpinpromo")]
        public string? Uidcertpinpromo  { get; set; }			
		
			
		[JsonPropertyName("Uidcertvigencia")]
        public string? Uidcertvigencia  { get; set; }			
		
			
		[JsonPropertyName("Valorpromo")]
        public decimal? Valorpromo  { get; set; }			
		   
		  
    }
}
