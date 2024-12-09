import mongoose from "mongoose";

export const dbConnection = () => {
    const mongoUrl = process.env.MONGO_URL;

    console.log("Attempting to connect to MongoDB:", mongoUrl);

    mongoose.connect(mongoUrl, { dbName: "SCHOOL_MANAGEMENT_SYSTEM" })
        .then(() => console.log("Connected to database"))
        .catch((error) => {
            console.error("Failed to connect to MongoDB:", error.message);
        });
};

