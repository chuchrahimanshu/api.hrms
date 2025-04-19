// Import Section
import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env.constants";

// Database Connection
async function connectDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("ERROR: Connecting to database - MongoDB");
    process.exit(1);
  }
}

// Export Section
export default connectDatabase;
