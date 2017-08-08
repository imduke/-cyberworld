using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationMva2.Services;

namespace WebApplicationMva2.Middleware
{
    public class RequestIdMiddleware
    {
        public readonly RequestDelegate _next;
        public readonly ILogger<RequestIdMiddleware> _logger;

        public RequestIdMiddleware(RequestDelegate next, ILogger<RequestIdMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public Task Invoke(HttpContext httpContext, IRequestID requestId)
        {
            _logger.LogInformation($"Request ID {requestId.Id}");
            return _next(httpContext);
        }

    }
}

