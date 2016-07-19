using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Myfollow.Startup))]
namespace Myfollow
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
