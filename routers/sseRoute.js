const express = require("express");
const router = express.Router();
const sseService = require("../services/sseService");

const apiBasePath = "/api/v1/sse";

router.get(`${apiBasePath}`, sseService.getSSE);
router.post(`${apiBasePath}/acknowledge`, sseService.acknowledgeNotification);

module.exports = router;
