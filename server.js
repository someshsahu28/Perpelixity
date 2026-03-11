import app from "./src/app.js"
import dotenv from "dotenv";
import connectToDb from "./config/database.js";

const PORT = process.env.PORT || 8000;
dotenv.config();

connectToDb()
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});