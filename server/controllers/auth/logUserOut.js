module.exports = (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.clearCookie("jwt", {
      httpOnly: true,
      path: "/",
    });

    return res.status(200).json({ message: "User successfully logged out" });
  } catch (error) {
    console.error("Error during logout:", error);
    next(error);
  }
};
