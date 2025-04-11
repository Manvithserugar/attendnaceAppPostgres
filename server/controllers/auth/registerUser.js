const { registerUser } = require("../../model");
const { generateAccessToken } = require("./authUtil");
const { signupSchema } = require("../../model/Schemas");
const { validator } = require("../../utilities");

module.exports = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);

  const signupValidator = validator(signupSchema);
  const { error, value } = signupValidator({
    name,
    email,
    password,
    confirmPassword,
  });
  if (error) {
    console.log("error while validating the student schema", error.details);
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json(errorMessages);
  }
  
  try {
    const user = await registerUser(name, email, password);
    const token = generateAccessToken(user);
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
