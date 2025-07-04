import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGO_DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1)
    }
}

export default connectDb