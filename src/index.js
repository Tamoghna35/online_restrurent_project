import dotenv from "dotenv";
import { app } from "./app.js";
import { DB_CONNECTION } from "./models/index.js";
dotenv.config({
  path: "./src/.env",
});
console.log("port===>", process.env.PORT);

DB_CONNECTION()
  .then(
    app.listen(process.env.PORT || 8069, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(`Postgres Connection Error !!!`);
  });
