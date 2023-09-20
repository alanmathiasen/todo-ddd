import mongoose from "mongoose";

export const connectDB = async () => {
  let address: string = process.env.MONGO_CNN || '';
  console.log(address);
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

export const disconnectDB = async () => {
  await mongoose.disconnect();
};

