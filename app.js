const WebSocket = require('ws').Server;
const http = require('http');

let server = http.createServer();
server.listen(8080);

let webSocketServer = new WebSocket({server: server});

  
  webSocketServer.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      webSocketServer.clients.forEach(function each(client) {
        client.send(data);
      });
    });
  });