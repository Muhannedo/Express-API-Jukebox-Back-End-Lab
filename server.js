const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// Import the controller file
const trackRoute = require("./controllers/tracks.js");

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors({}));
app.use(methodOverride("_method"));

app.use(express.json());

// ROUTERS
app.use("/tracks", trackRoute);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
