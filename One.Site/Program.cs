using Microsoft.AspNetCore.Mvc.Filters;
using One.Logs.Api.Client;   
using One.Site.Implementation;
using One.Site.Security;
using One.Site.Services;
using One.Site.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.           

builder.Services.AddControllersWithViews();

builder.Services.AddScoped<IApiConsumo, ApiConsumo>();
 



builder.Services.AddScoped<ActionFilterToken>();

var oneApiLogsSettings = builder.Configuration.GetSection("OneApiLogsSettings").Get<OneApiLogsSettings>();

(new OneLogsApiInit()).Init(builder.Services, oneApiLogsSettings);



builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();


 
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
} 
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseSession();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
