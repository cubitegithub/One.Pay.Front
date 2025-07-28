using System.Net.Http.Headers;
using System.Net.Http;
using System.Runtime.Intrinsics.Arm;
using System.Text;

namespace One.Site.Services
{
    public interface IApiConsumo
    {
         Task<string> Get(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null);
        Task<string> GetAsync(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null);

        Task<string> Delete(string methodUrl, string tokenAuth, Dictionary<string, string>? headerIn = null);

        Task<string> Post<T>(string methodUrl, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null);
        Task<string> PostUrlGeneric<T>(string methodUrlGeneric, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null);
        Task<string> Put<T>(string methodUrl, string tokenAuth, T entity, Dictionary<string, string>? headerIn = null);
        
 
    }
}
