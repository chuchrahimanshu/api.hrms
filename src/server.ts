// Import Section
import app from "./app";
import { PORT } from "./constants/env.constants";
import connectDatabase from "./config/database.config";

// Igniting Server
(async () => {
  try {
    connectDatabase()
      .then(() => {
        console.log("SUCCESS: Connected to database - MongoDB");
        app.listen(PORT, (error) => {
          if (error) {
            console.log(`ERROR: Listening to Server at Port: ${PORT}`, error);
            process.exit(1);
          }
          console.log(`SUCCESS: Ignited Express Server at Port: ${PORT}`);
        });
      })
      .catch((error) => {
        console.log("ERROR: Connecting to database - MongoDB", error);
        process.exit(1);
      });
  } catch (error) {
    console.log(`ERROR: Igniting Server at Port: ${PORT}`, error);
    process.exit(1);
  }
})();
