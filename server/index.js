const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// express middlewares`
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// app router
app.use("/api/v1/", router);

const PORT = process.env.PORT;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO DB SUCCESSFULLY..!");

    app.listen(PORT, () => {
      console.log(`server is running and listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
