// Import Section
import express from "express";
import type { Express } from "express";
import dotenv from "dotenv";

// Configuration Section
const app: Express = express();

// Middleware Section
dotenv.config();

// Export Section
export default app;
