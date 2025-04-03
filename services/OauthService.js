const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const oauthRepo = require("../Repository/OauthRepo");

const generateJWT = (user) => {
  const secretKey = process.env.SECRET_KEY;
  const payload = {
    sub: user.id,
    email: user.email,
    username: user.name,
    roleId: user.role_id,
    iat: Math.floor(Date.now() / 1000), // Issued at (current time in seconds)
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
    iss: "http://localhost:3000", // Issuer
    aud: "http://localhost:3000", // Audience
  };

  const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });
  return token;
};

const authenticationService = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await oauthRepo.checkUser(email, password);
    if (!user)
      return res.status(404).json({ message: "invalid email or password" });
    const token = generateJWT(user);
    console.log(token);
    res.cookie("jwt", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 1000,
    });
    res.status(200).json({ message: "user logged in" });
  } catch (error) {
    console.log("error logging in");
    next(error);
  }
};

const signUpService = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    const user = await oauthRepo.createUser(name, email, password);
    const token = generateJWT(user);
    console.log(token);

    res.cookie("jwt", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 1000,
    });
    res.status(201).json({ message: "user signed up" });
  } catch (err) {
    console.log("error while signing up : ", err);
    err.message = "email id already exists";
    next(err);
  }
};

module.exports = {
  authenticationService,
  signUpService,
};
