const express = require("express");
const router = express.Router();
const {
  subscribeNotification,
  acknowledgeNotification,
} = require("../controllers");

const apiBasePath = "/api/v1/sse";

router.get(`${apiBasePath}`, subscribeNotification);
router.post(`${apiBasePath}/acknowledge`, acknowledgeNotification);

module.exports = router;
