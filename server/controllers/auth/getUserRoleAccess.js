const { getUserRoleAccess, getUserRole } = require("../../model");

module.exports = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    const roleId = user.role_id;

    const [permissionsResult, role] = await Promise.all([
      getUserRoleAccess(roleId),
      getUserRole(roleId),
    ]);

    if (permissionsResult.length === 0) {
      return res
        .status(404)
        .json({ message: "access or permissions details not found" });
    }

    const permissions = permissionsResult.map(
      (permission) => permission.access
    );
    res.status(200).json({ role, permissions });
  } catch (err) {
    console.log("error fetching the role access", err);
    next(err);
  }
};
