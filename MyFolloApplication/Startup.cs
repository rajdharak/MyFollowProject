using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyFolloApplication.Startup))]
namespace MyFolloApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
