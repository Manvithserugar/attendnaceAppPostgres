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
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};

const authenticateJWT = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: "Unauthorized, User not found" });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = {
  passportConfig,
  authenticateJWT,
};
