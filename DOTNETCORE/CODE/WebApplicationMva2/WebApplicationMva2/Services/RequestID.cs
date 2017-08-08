using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace WebApplicationMva2.Services
{
    public interface IRequestID
    {
        string Id { get; }
    }

    public class RequestID : IRequestID
    {
        private readonly string _requestId;
        public RequestID(IRequestIdFactory requestIdFactory)
        {
            _requestId = requestIdFactory.MakeRequestId();
        }
        public string Id
        {
            get
            {
                return _requestId;
            }
        }
    }

    public interface IRequestIdFactory
    {
        string MakeRequestId();
    }

    public class RequestIdFactory : IRequestIdFactory
    {
        private int _requestId;
        public string MakeRequestId()
        {
            return Interlocked.Increment(ref _requestId).ToString();
        }
    }
}
