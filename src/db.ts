import mongoose, { mongo } from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/faztstore");
  } catch (error) {
    console.log(error)
  }
}
