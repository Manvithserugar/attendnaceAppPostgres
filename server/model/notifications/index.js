const redisHandler = require("../../lib/redisHandler");

class NotificationHandler {
  constructor() {
    this.clients = {};

    this.subscribeNotifications = this.subscribeNotifications.bind(this);
    this.unSubscribeNotifications = this.unSubscribeNotifications.bind(this);
    this.broadcastNotification = this.broadcastNotification.bind(this);
    this.acknowledgeNotification = this.acknowledgeNotification.bind(this);
  }

  async subscribeNotifications(client) {
    const { id, res } = client;

    await redisHandler.sadd("connectedClients", id);
    this.clients[id] = res;

    console.log(
      `Client connected, total clients: ${Object.keys(this.clients).length}`
    );

    const unAcknowledgedNotifications = await redisHandler.lrange(
      "notifications",
      0,
      -1
    );

    if (unAcknowledgedNotifications.length > 0) {
      unAcknowledgedNotifications.forEach((notification) => {
        res.write(`data: ${notification}\n\n`);
      });
    }
  }

  async unSubscribeNotifications(id) {
    await redisHandler.srem("connectedClients", id);
    delete this.clients[id];

    console.log(
      `Client ${id} disconnected, total clients: ${
        Object.keys(this.clients).length
      }`
    );
  }

  async broadcastNotification(notification) {
    const ids = await redisHandler.smembers("connectedClients");

    await redisHandler.rpush("notifications", JSON.stringify(notification));

    ids.forEach((id) => {
      const res = this.clients[id];

      if (res) {
        res.write(`data: ${JSON.stringify(notification)}\n\n`);
      } else {
        console.warn(`Client ${id} has no response object`);
      }
    });

    console.log(`Broadcasting notification: ${JSON.stringify(notification)}`);
  }

  async acknowledgeNotification() {
    await redisHandler.del("notifications");
    console.log("Notifications acknowledged and cleared");
  }
}

module.exports = new NotificationHandler();
