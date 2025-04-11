const {
  getAllStudentsDetails: getAllStudentsDetailsController,
} = require("../../controllers");
const {
  getAllStudentsDetails: getAllStudentsDetailsModel,
} = require("../../model");

jest.mock("../../model");

describe("Controller: Get All Students Details", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should return 200 and students data when students exist", async () => {
    const mockStudents = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
    getAllStudentsDetailsModel.mockResolvedValue(mockStudents);

    await getAllStudentsDetailsController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockStudents);
  });

  test("should return 404 when no students are found", async () => {
    getAllStudentsDetailsModel.mockResolvedValue([]);

    await getAllStudentsDetailsController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Students not found" });
  });

  test("should call next with an error when an exception occurs", async () => {
    const mockError = new Error("Database error");
    getAllStudentsDetailsModel.mockRejectedValue(mockError);

    await getAllStudentsDetailsController(req, res, next);

    expect(next).toHaveBeenCalledWith(mockError);
  });
});
