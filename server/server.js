const express = require("express");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const { auth, courses, notifications, students } = require("./routes");
const { errorHandler } = require("./middlewares");
const { configurePassport, authenticateJWT } = require("./lib");
const { HTTP_PORT } = require("./consts");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

const port = HTTP_PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).send("server reached");
});

// Serve static files from a "view" directory
app.use("/student", express.static(path.join(__dirname, "view")));

// This route serves any file under view
app.get("/student/*", (req, res) => {
  res.sendFile(path.join(__dirname, "view", req.params[0]));
});

configurePassport();

app.use(auth);
app.use(authenticateJWT);
app.use(courses, notifications, students);
app.use(errorHandler);

app.listen(port, console.log(`server listening at port ${port}`));
