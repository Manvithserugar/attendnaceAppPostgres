const {
  notifications: { subscribeNotifications, unSubscribeNotifications },
} = require("../../model");

module.exports = async (req, res, next) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  try {
    const clientId = Date.now();
    const newClient = {
      id: clientId,
      res,
    };

    subscribeNotifications(newClient);
    console.log(`${clientId} Connection open`);

    req.on("close", () => {
      console.log(`${clientId} Connection closed`);
      unSubscribeNotifications(clientId);
    });
  } catch (err) {
    console.error("Error in SSE connection:");
    next(err);
  }
};
