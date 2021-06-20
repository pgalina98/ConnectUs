const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users");

dotenv.config();

//Fetching variables from .env file
const PORT = process.env.PORT | 8080;
const MONGODB_URI = process.env.MONGODB_URI;

//Connection to Mongo Database
mongoose.connect(
  MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Successfully connected to Mongo Database!");
  }
);

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/api/users", userRouter);

//Server configuration
app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
