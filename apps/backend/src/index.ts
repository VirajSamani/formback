import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use("/api/v1/hello", (req: Request, res: Response) => { 
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
