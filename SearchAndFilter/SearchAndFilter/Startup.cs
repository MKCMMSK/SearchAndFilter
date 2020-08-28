using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SearchAndFilter.Data;
using SearchAndFilter.Models;

namespace SearchAndFilter
{
    public class Startup
    {
        readonly string MyAlloweSpecificOrigins = "_myallowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy(name: MyAlloweSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000");
                                  });
            });
            services.AddControllers();
            services.AddDbContext<CategoryEventContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DevConnection")));
            services.AddScoped<ICategoryRepo, SqlCategoryRepo>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors(MyAlloweSpecificOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
