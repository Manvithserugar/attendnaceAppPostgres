const { authenticateUser } = require("../../model");
const { generateAccessToken } = require("./authUtil");
const { loginSchema } = require("../../model/Schemas");
const { validator } = require("../../utilities");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  const loginValidator = validator(loginSchema);
  const { error, value } = loginValidator({ email, password });
  if (error) {
    console.log("error while validating the student schema", error.details);
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json(errorMessages);
  }

  
  try {
    const user = await authenticateUser(email, password);
    if (!user)
      return res.status(404).json({ message: "invalid email or password" });
    const token = generateAccessToken(user);
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
