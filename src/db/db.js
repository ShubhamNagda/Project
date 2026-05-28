import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}`
        );
        console.log(
            `\n MongoDB Connected ${connectionInstance.connection.host}`
        );
    } catch (err) {
        console.log("MongoDB Connection Error: ", err);
    }
};

export default connectDB;
