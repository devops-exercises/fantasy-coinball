using System.Web;
using System.Web.Http;

namespace FantasyCoinballApi
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
