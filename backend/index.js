import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './route/user.route.js';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URI;

// console.log(MONGODB_URL);

app.use(express.json());
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

// app.get('/', (req,res) => {
//     res.send("Hello");
// });

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
});
