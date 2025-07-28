using System.Text.Json;

namespace One.Site.Utils
{
    public static class Conversiones
    {
        public static object ConvertirJsonAObjeto(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;

            try
            {
                return JsonSerializer.Deserialize<object>(json);
            }
            catch (JsonException)
            {
                return null; // Retorna null si el JSON no tiene formato válido
            }
        }
    }
}
