const app = require("express")();
const appWs = require("express-ws")(app);

app.ws("/data", (ws) => {
  ws.on("message", (msg) => {
    console.log("Received: ", msg);
    // Broadcast to all clients
    appWs.getWss().clients.forEach((client) => {
      client.send(msg);
    });
    
  });
});

app.listen(3005, () => console.log("Server has been started *:3005"));
