import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashhaburrahaman:130607862006@cluster0.qxvi8.mongodb.net/blog-app');
    await mongoose.connect(dbUrl);
    console.log("Database connected");
    
    }


    