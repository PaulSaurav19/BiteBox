import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).
then(() => console.log("Connected to database!"));


const app = express(); // it will create a new express server and assign it to app variable
app.use(express.json())
app.use(cors())

app.use("/api/my/user", myUserRoute);

app.listen(8000, ()=> {
    console.log("server started on localhost:8000");
})