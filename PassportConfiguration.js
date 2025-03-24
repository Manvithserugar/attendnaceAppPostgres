const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const oauthRepo = require("./Repository/OauthRepo");

const passportConfig = () => {
  const secretKey = process.env.SECRET_KEY;
  const opts = {
    jwtFromRequest: ExtractJwt.fromExtractors([(req) => req.cookies["jwt"]]),
    secretOrKey: secretKey,
    issuer: "http://localhost:3000",
    audience: "http://localhost:3000",
    algorithms: ["HS256"],
    ignoreExpiration: false,
  };

  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const { sub, email, username } = jwt_payload;
      try {
        const user = await oauthRepo.checkUserForJwt(sub, email);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    })
  );
};

const authenticateJWT = passport.authenticate("jwt", { session: false });

module.exports = {
  passportConfig,
  authenticateJWT,
};
