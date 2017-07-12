using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace SuperMva
{

public class Startup{

public void Configure(IApplicationBuilder app){
    app.Run(context => {
        return context.Response.WriteAsync("Hello ASPNET Core");
    });
}


}
}