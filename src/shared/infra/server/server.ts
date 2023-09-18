import mongoose from "mongoose";

const connectDB = async () => {
  let address: string = process.env.MONGO_CNN || '';
  if (!address) {
    throw new Error('Please define the MONGO_CNN environment variable');
  }
  try {
    await mongoose.connect(address);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

connectDB();