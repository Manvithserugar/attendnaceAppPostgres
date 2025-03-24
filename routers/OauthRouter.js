const express = require("express");
const router = express.Router();

const oauthService = require("../services/OauthService");

const apiBasePath = "/api/v1/oauth";

router.post(`${apiBasePath}/login`, oauthService.authenticationService);
router.post(`${apiBasePath}/signup`, oauthService.signUpService);

module.exports = router;
