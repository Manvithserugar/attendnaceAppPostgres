const sseRepo = require("../Repository/sseRepo");

const getSSE = async (req, res, next) => {
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

    sseRepo.addClient(newClient);
    console.log(`${clientId} Connection open`);

    req.on("close", () => {
      console.log(`${clientId} Connection closed`);
      sseRepo.removeClient(clientId);
    });
  } catch (err) {
    console.error("Error in SSE connection:");
    next(err);
  }
};

const acknowledgeNotification = async (req, res, next) => {
  try {
    sseRepo.acknowledgeNotification();
    res.status(200).json({ message: "Acknowledged" });
  } catch (err) {
    console.error("Error in SSE connection:");
    next(err);
  }
};

module.exports = {
  getSSE,
  acknowledgeNotification,
};
