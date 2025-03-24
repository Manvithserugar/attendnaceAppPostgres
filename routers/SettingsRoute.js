const express = require("express");
const router = express.Router();

const settingsService = require("../services/SettingsService");
const authorizeRoute = require("../utilities/authorizeRouteService");

const apiBasePath = "/api/v1/settings";

router.post(
  `${apiBasePath}/dropdown-options`,
  authorizeRoute(["admin"]),
  settingsService.addDropdownOption
);

router.get(
  `${apiBasePath}/dropdown-options`,
  settingsService.getDropdownOptions
);

router.delete(
  `${apiBasePath}/dropdown-options/:id`,
  authorizeRoute(["admin"]),
  settingsService.deleteDropdownOption
);

module.exports = router;
