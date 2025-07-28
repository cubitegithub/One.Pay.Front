using System.Text.Json.Serialization;

namespace One.Site.Models.Certparroquia
{
    public class CertparroquiaUpdateIn
    {
		
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertparroquia { get; set; }			
		
			
		[JsonPropertyName("Uidcertcanton")]
        public string?  Uidcertcanton { get; set; }			
		
			
		[JsonPropertyName("Parroquia")]
        public string?  Parroquia { get; set; }			
		   
 
    }
}
