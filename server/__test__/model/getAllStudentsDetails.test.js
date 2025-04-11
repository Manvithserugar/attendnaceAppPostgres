const pool = require("../../model/db");
const { getAllStudentsDetails } = require("../../model");
const { SELECT_ALL_STUDENTS } = require("../../model/queries");

jest.mock("../../model/db", () => ({
  query: jest.fn(),
}));

describe("Model: Get All Students Details", () => {
  test("should return rows when query is successful", async () => {
    const mockRows = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
    pool.query.mockResolvedValue({ rows: mockRows });

    const result = await getAllStudentsDetails();

    expect(pool.query).toHaveBeenCalledWith(SELECT_ALL_STUDENTS);
    expect(result).toEqual(mockRows);
  });

  test("should return an empty array when no rows are found", async () => {
    pool.query.mockResolvedValue({ rows: [] });

    const result = await getAllStudentsDetails();

    expect(pool.query).toHaveBeenCalledWith(SELECT_ALL_STUDENTS);
    expect(result).toEqual([]);
  });

  test("should throw an error when query fails", async () => {
    const mockError = new Error("Database error");
    pool.query.mockRejectedValue(mockError);

    await expect(getAllStudentsDetails()).rejects.toThrow("Database error");
    expect(pool.query).toHaveBeenCalledWith(SELECT_ALL_STUDENTS);
  });
});
