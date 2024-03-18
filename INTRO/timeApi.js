let http = require('http');
let server = http.createServer(callbackClientRequest);
server.listen(8080);


function callbackClientRequest(clientRequest,serverRespose)
{
  dateNow = new Date();
  serverRespose.end(dateNow.getHours().toString()+" "+dateNow.getMinutes().toString()+" "+dateNow.getSeconds().toString());
  serverRespose.end(dateNow.getHours().toString()+" "+dateNow.getMinutes().toString()+" "+dateNow.getSeconds().toString());
  serverRespose.end(dateNow.getHours().toString()+" "+dateNow.getMinutes().toString()+" "+dateNow.getSeconds().toString());
}