import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  allowEIO3: true,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
  },
});

io.on("connect", (socket) => {
	console.log("a user connected");
	
	socket.on("data", (msg) => {
		console.log("message: " + msg);
	});

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
		
});

httpServer.listen(3005, () => {
	console.log("listening on *:3005");
});
