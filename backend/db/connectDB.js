import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
	} catch (err) {
		console.error(`Error: ${err.message}`.red);
		process.exit(1);
	}
};
