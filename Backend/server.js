// const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept json data

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:"+ PORT);
}); 