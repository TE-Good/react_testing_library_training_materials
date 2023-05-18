import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App displays title", () => {
  render(<App />);
  const title = screen.getByText("ToDo List");
  expect(title).toBeInTheDocument();
});

test("the submit button is disabled when the form is not complete", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeDisabled();
});

test("when submitting a form, the form is cleared", () => {
  render(<App />);

  const taskNameInput = screen.getByPlaceholderText("Task name..");
  userEvent.type(taskNameInput, "task 1");

  const taskDescriptionInput =
    screen.getByPlaceholderText("More information..");
  userEvent.type(taskDescriptionInput, "description 1");

  expect(taskNameInput).toHaveValue("task 1");
  expect(taskDescriptionInput).toHaveValue("description 1");

  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  expect(taskNameInput).toHaveValue("");
  expect(taskDescriptionInput).toHaveValue("");
});

test("A new entry in the table is created when submitting the form", () => {
  render(<App />);

  const taskNameInput = screen.getByPlaceholderText("Task name..");
  userEvent.type(taskNameInput, "task 1");

  const taskDescriptionInput =
    screen.getByPlaceholderText("More information..");
  userEvent.type(taskDescriptionInput, "description 1");

  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  const tableRow = screen.getByTestId("table-row");
  expect(tableRow).toBeInTheDocument();
});

test('When the "Already Complete" is checked, then the table row entry is also checked', () => {
  render(<App />);

  const taskNameInput = screen.getByPlaceholderText("Task name..");
  userEvent.type(taskNameInput, "task 1");

  const taskDescriptionInput =
    screen.getByPlaceholderText("More information..");
  userEvent.type(taskDescriptionInput, "description 1");

  const alreadyCompletedCheckbox = screen.getByRole("checkbox", {
    name: /Already complete/i,
  });
  userEvent.click(alreadyCompletedCheckbox);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  const { getByRole: getByRoleInTableRow } = within(
    screen.getByTestId("table-row")
  );
  const tableRowCheckbox = getByRoleInTableRow("checkbox");

  expect(tableRowCheckbox.checked).toEqual(true);
});
