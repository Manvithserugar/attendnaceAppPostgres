const {
  notifications: { acknowledgeNotification },
} = require("../../model");

module.exports = async (req, res, next) => {
  try {
    acknowledgeNotification();
    res.status(200).json({ message: "Acknowledged" });
  } catch (err) {
    console.error("Error in SSE connection:");
    next(err);
  }
};
