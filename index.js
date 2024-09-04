const app = require("express")();
const appWs = require("express-ws")(app);

app.ws("/TRK-001", (ws) => {
  ws.on("message", (msg) => {
    console.log("Received: ", msg);
    appWs.getWss().clients.forEach((client) => {
      client.send(msg);
    });
  });
});

app.listen(3005, () => console.log("Server has been started *:3005"));
