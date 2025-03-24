const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const studentRoute = require("./routers/StudentRoute");
const settingsRoute = require("./routers/SettingsRoute");
const oauthRoute = require("./routers/OauthRouter");
const { errorHandler } = require("./utilities/errorHandler");
const { passportConfig, authenticateJWT } = require("./PassportConfiguration");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).send("server reached");
});

passportConfig();

app.use(oauthRoute);
app.use(authenticateJWT);
app.use(studentRoute);
app.use(settingsRoute);
app.use(errorHandler);

app.listen(port, console.log(`server listening at port ${port}`));
