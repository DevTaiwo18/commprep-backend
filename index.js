import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import sessionRoutes from "./routes/session.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:5173", "https://commprep-frontend.vercel.app"],
    })
);

app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("CommPrep API is running");
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 5001, () =>
            console.log(`Server running on port ${process.env.PORT || 5001}`)
        );
    })
    .catch((err) => console.log(err));
