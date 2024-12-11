import mongoose from "mongoose";

mongoose.set("debug", true); // Add this line for detailed logs

const dbConnection = async () => {
    try {
        console.log(`Attempting to connect to MongoDB: ${process.env.MONGO_URL}`);
        await mongoose.connect(process.env.MONGO_URL); // Deprecated options removed
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

export default dbConnection;

