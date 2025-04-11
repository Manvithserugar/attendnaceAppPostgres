/// <reference types="Cypress" />

function checkHeaderAndDatePicker() {
  const today = new Date().toISOString().split("T")[0];
  cy.get('input[type="date"]').should("have.value", today);
  cy.contains("h1", "View Attendance").should("be.visible");
}

describe("View Page test cases", () => {
  it("view page should load successfully", () => {
    cy.fixture("viewStudentsAttendance.json").then((mockData) => {
      const attendanceData = mockData.mockData;

      cy.fixture("userRolesAndPermissions.json").then((permissionsData) => {
        cy.visit("http://localhost:5173/view");

        cy.intercept("GET", "http://localhost:5173/api/v1/oauth/role/access", {
          statusCode: 200,
          body: permissionsData,
        }).as("getPermissions");

        cy.intercept(
          "POST",
          "http://localhost:5173/api/v1/student/attendance/date",
          {
            statusCode: 200,
            body: attendanceData,
          }
        ).as("getStudentsAttendance");

        cy.wait("@getPermissions");
        cy.wait("@getStudentsAttendance");

        checkHeaderAndDatePicker();

        cy.get("table").within(() => {
          cy.get("thead").within(() => {
            cy.get("th").eq(0).should("contain.text", "Student Name");
            cy.get("th").eq(1).should("contain.text", "Student ID");
            cy.get("th").eq(2).should("contain.text", "Total Attendance");
            cy.get("th").eq(3).should("contain.text", "Consecutive Classes");
            cy.get("th").eq(4).should("contain.text", "Streak Of 4");
          });

          cy.get("tbody").within(() => {
            cy.get("tr").should("have.length", attendanceData.length);
            attendanceData.forEach((record, index) => {
              cy.get("tr")
                .eq(index)
                .within(() => {
                  cy.get("td")
                    .eq(0)
                    .should("contain.text", record.student_name);
                  cy.get("td").eq(1).should("contain.text", record.id);
                  cy.get("td").eq(2).should("contain.text", record.total);
                  cy.get("td")
                    .eq(3)
                    .should("contain.text", record.consecutive_classes);
                  cy.get("td")
                    .eq(4)
                    .should("contain.text", record.streak_of_four);
                });
            });
          });
        });
      });
    });
  });

  it("should display a message when no attendance records are found", () => {
    cy.fixture("userRolesAndPermissions.json").then((permissionsData) => {
      cy.visit("http://localhost:5173/view");

      cy.intercept("GET", "http://localhost:5173/api/v1/oauth/role/access", {
        statusCode: 200,
        body: permissionsData,
      }).as("getPermissions");

      cy.intercept(
        "POST",
        "http://localhost:5173/api/v1/student/attendance/date",
        {
          statusCode: 404,
          body: {
            message: "No attendance records found",
          },
        }
      ).as("getStudentsAttendance");

      cy.wait("@getPermissions");
      cy.wait("@getStudentsAttendance");

      checkHeaderAndDatePicker();

      cy.contains("h4", "No attendance records found for this date.").should(
        "be.visible"
      );

      cy.get("table").should("not.exist");
    });
  });

  it("should display a toast notification when an internal server error occurs", () => {
    cy.fixture("userRolesAndPermissions.json").then((permissionsData) => {
      cy.visit("http://localhost:5173/view");

      cy.intercept("GET", "http://localhost:5173/api/v1/oauth/role/access", {
        statusCode: 200,
        body: permissionsData,
      }).as("getPermissions");

      cy.intercept(
        "POST",
        "http://localhost:5173/api/v1/student/attendance/date",
        {
          statusCode: 500,
          body: {
            message: "Internal Server Error",
          },
        }
      ).as("getStudentsAttendance");

      cy.wait("@getPermissions");
      cy.wait("@getStudentsAttendance");

      checkHeaderAndDatePicker();

      cy.get('[role="alert"]').should("contain.text", "Internal Server Error");

      cy.contains("h4", "No attendance records found for this date.").should(
        "be.visible"
      );

      cy.get("table").should("not.exist");
    });
  });
});
