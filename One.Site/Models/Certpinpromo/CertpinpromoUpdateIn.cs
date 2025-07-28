using System.Text.Json.Serialization;

namespace One.Site.Models.Certpinpromo
{
    public class CertpinpromoUpdateIn
    {
		
		
			
		[JsonPropertyName("id")]
        public string?  Uidcertpinpromo { get; set; }			
		
			
		[JsonPropertyName("Pin")]
        public string?  Pin { get; set; }			
		
			
		[JsonPropertyName("Espublico")]
        public bool?  Espublico { get; set; }			
		
			
		[JsonPropertyName("Fechainicio")]
        public DateTime?  Fechainicio { get; set; }			
		
			
		[JsonPropertyName("Fechafin")]
        public DateTime?  Fechafin { get; set; }			
		
			
		[JsonPropertyName("Razonsocialnombresapellidos")]
        public string?  Razonsocialnombresapellidos { get; set; }			
		
			
		[JsonPropertyName("Ciruc")]
        public string?  Ciruc { get; set; }			
		
			
		[JsonPropertyName("Correo")]
        public string?  Correo { get; set; }			
		
			
		[JsonPropertyName("Telefono")]
        public string?  Telefono { get; set; }			
		
			
		[JsonPropertyName("Descripcion")]
        public string?  Descripcion { get; set; }			
		   
 
    }
}
