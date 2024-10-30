import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './route/user.route.js';
import blogRouter from './route/blog.route.js';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from "cookie-parser";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URI;

// console.log(MONGODB_URL);

app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
});

try{
    mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
}
catch(error){
    console.log("Error", error);
}

// defining routes
app.use("/api/users",userRouter);   
app.use("/api/blogs",blogRouter);   


// app.get('/', (req,res) => {
//     res.send("Hello");
// });

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
});
