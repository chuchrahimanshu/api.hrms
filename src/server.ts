// Import Section
import app from "./app";
import { PORT } from "./constants/env.constants";

// Igniting Server
(async () => {
  try {
    app.listen(PORT, (error) => {
      if (error) {
        console.log(`ERROR: Listening to Server at Port: ${PORT}`, error);
        process.exit(1);
      }
    });
  } catch (error) {
    console.log(`ERROR: Igniting Server at Port: ${PORT}`, error);
    process.exit(1);
  }
})();
