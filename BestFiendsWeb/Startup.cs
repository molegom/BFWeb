using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BestFiendsWeb.Startup))]
namespace BestFiendsWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
