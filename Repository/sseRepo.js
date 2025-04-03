const redis = require("../redis");

let clients = {};

const addClient = async (client) => {
  const { id, res } = client;

  await redis.sadd("connectedClients", id);

  clients[id] = res;

  console.log(
    `Client connected, total clients: ${Object.keys(clients).length}`
  );

  const unAcknowledgedNotifications = await redis.lrange(
    "notifications",
    0,
    -1
  );

  if (unAcknowledgedNotifications.length > 0) {
    unAcknowledgedNotifications.forEach((notification) => {
      res.write(`data: ${notification}\n\n`);
    });
  }
};

const removeClient = async (id) => {
  await redis.srem("connectedClients", id);

  delete clients[id];

  console.log(
    `Client ${id} disconnected, total clients: ${Object.keys(clients).length}`
  );
};

const broadcastNotification = async (notification) => {
  const ids = await redis.smembers("connectedClients");

  await redis.rpush("notifications", JSON.stringify(notification));

  ids.forEach((id) => {
    const res = clients[id];

    if (res) {
      res.write(`data: ${JSON.stringify(notification)}\n\n`);
    } else {
      console.warn(`Client ${id} has no response object`);
    }
  });

  console.log(`Broadcasting notification: ${JSON.stringify(notification)}`);
};

const acknowledgeNotification = async () => {
  // Clear notifications from Redis
  await redis.del("notifications");
  console.log("Notifications acknowledged and cleared");
};

module.exports = {
  addClient,
  removeClient,
  broadcastNotification,
  acknowledgeNotification,
};
