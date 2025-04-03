const Redis = require("ioredis");

// Create Redis client (default localhost:6379)
const redis = new Redis();

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = redis;
