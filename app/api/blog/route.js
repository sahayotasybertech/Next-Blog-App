import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/Models/BlogModel";
import { log } from "console";
const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises';


const LoadDB = async () => {
    await connectDB();
}

LoadDB();

export async function GET(request) {
    return NextResponse.json({ message: "Blog GET Hit" })
}

export async function POST(request) {
    
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffre = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffre);
    const imgUrl = `/${timestamp}_${image.name}`;


    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    BlogModel.create(blogData);
    console.log("Blog Saved"); 
    

    return NextResponse.json({success: true, message: "Blog added" })
}