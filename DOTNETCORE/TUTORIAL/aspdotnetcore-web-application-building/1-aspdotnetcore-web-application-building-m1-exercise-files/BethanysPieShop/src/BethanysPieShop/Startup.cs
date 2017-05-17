using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using BethanysPieShop.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BethanysPieShop
{
    public class Startup
    {
        private IConfigurationRoot _configurationRoot;

        public Startup(IHostingEnvironment hostingEnvironment)
        {
            _configurationRoot = new ConfigurationBuilder()
               .SetBasePath(hostingEnvironment.ContentRootPath)
               .AddJsonFile("appsettings.json")
               //.AddJsonFile($"appsettings.{hostingEnvironment.EnvironmentName}.json", true)
               .Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //_configurationRoot = new ConfigurationBuilder()
            //    .SetBasePath(Directory.GetCurrentDirectory())
            //    .AddJsonFile("appsettings.json")
            //    .Build();

            

            services.AddDbContext<AppDbContext>(options =>
                                         options.UseSqlServer(_configurationRoot.GetConnectionString("DefaultConnection")));

            //services.Configure<IdentityOptions>(options =>
            //{
            //    options.Password.RequireDigit = true;
            //    options.Password.RequiredLength = 8;
            //    options.Password.RequireNonAlphanumeric = true;
            //    options.User.RequireUniqueEmail = true;
            //});

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<AppDbContext>();

            services.AddTransient<IPieRepository, PieRepository>();
            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<ShoppingCart>(sp => ShoppingCart.GetCart(sp));
            services.AddTransient<IOrderRepository, OrderRepository>();

            //services.AddTransient<ICategoryRepository, MockCategoryRepository>();
            //services.AddTransient<IPieRepository, MockPieRepository>();
            services.AddMvc();

            //session specific
            services.AddMemoryCache();
            services.AddSession();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }
            else
            {
                app.UseExceptionHandler("/AppException");
            }
            app.UseStaticFiles();

            app.UseSession();
            app.UseIdentity();

            app.UseMvc(routes =>
            {
               routes.MapRoute(
                   name: "categoryfilter",
                   template: "Pie/{action}/{category?}",
                   defaults: new { Controller = "Pie", action = "List" });

                //routes.MapRoute(
                //    name: null,
                //    template: "{category}",
                //    defaults: new { controller = "Pie", action = "List" }
                //);

                routes.MapRoute(
                name: "default",
                template: "{controller=Home}/{action=Index}/{id?}");


            });

            DbInitializer.Seed(app);

            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }
    }
}
