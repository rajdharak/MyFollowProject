using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyFollowv1._2.Startup))]
namespace MyFollowv1._2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
