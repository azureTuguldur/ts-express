import mongoose = require("mongoose");

const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB -тэй холбогдлоо `);
  } catch (err) {
    console.log("MongoDB -тэй холбогдkh үед алдаа гарлаа: ", err);
  }
};

export default connectDB;
