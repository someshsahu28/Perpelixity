import app from "./src/app.js"
import dotenv from "dotenv/config";
import connectToDb from "./config/database.js";
import http from "http";
import {initSocket} from "./src/sockets/server.socket.js"
const PORT = process.env.PORT || 8000;

const httpServer = http.createServer(app);

initSocket(httpServer);

connectToDb()
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });


httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});