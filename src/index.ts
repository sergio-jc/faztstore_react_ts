import app from "./app";
import { connectDB } from "./db";

connectDB()

app.listen(3000, () => {
  console.log("Server Running in port 3000");
});
