const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const router = require("./routes/index");
const passport = require("passport");
const passportRouter = require("./routes/passportRouter");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
require("./service/googleAuth");
require("./service/linkedInAuth");
require("dotenv").config();

const app = express();

// express middlewares`
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // allow cookies to be passed from client to server
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

// app router
app.use("/api/v1", router);
app.use("/auth", passportRouter);

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
