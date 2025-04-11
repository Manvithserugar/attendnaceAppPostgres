const Redis = require("ioredis");

// Create Redis client (default localhost:6379)
const redisHandler = new Redis();

redisHandler.on("connect", () => {
  console.log("Connected to Redis");
});

redisHandler.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = redisHandler;
