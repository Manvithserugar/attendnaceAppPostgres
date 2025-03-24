const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  switch (err.code) {
    case "23505": // Duplicate key violation
      return res.status(400).json({ message: err.message });
    case "23503": // Foreign key violation
      return res
        .status(400)
        .json({ message: "Foreign key violation: related data exists" });
    case "23502": // Not null violation
      return res.status(400).json({ message: "Required field is missing" });
    case "42501": // Insufficient privilege
      return res
        .status(403)
        .json({ message: "You don't have permission to do this" });
    default: // All other errors
      return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  errorHandler,
};
