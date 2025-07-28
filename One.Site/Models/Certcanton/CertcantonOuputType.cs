using Newtonsoft.Json;
using System.Text.Json.Serialization;
namespace One.Site.Models.Certcanton
{
   
    public class CertcantonOutputType
    {
		
		      
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertcanton { get; set; }
			
		
			
		[JsonPropertyName("Uidcertprovincia")]
        public string?  Uidcertprovincia { get; set; }
			
		
			
		[JsonPropertyName("Canton")]
        public string?  Canton { get; set; }
			
		       
        
    }
}
