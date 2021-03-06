var useragent = require('useragent');

var methods = {
  getClientIp(req) {
    var ipAddress;
    // The request may be forwarded from local web server.
    var forwardedIpsStr = req.header('x-forwarded-for'); 
    if (forwardedIpsStr) {
      // 'x-forwarded-for' header may return multiple IP addresses in
      // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
      // the first one
      var forwardedIps = forwardedIpsStr.split(',');
      ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
      // If request was not forwarded
      ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
  },
  
  getLanguage(req) {
    return req.acceptsLanguages()[0];
  },
  
  getSoftware(req) {
    var agent = useragent.parse(req.headers['user-agent']);
    return agent.os.toString();
  }
}

module.exports = methods;