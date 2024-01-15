// Signup.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Auth from "./Auth";

describe("Signup Component", () => {
  test("renders Signup component correctly", () => {
    render(<Auth />);
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("validates password match on signup", () => {
    render(<Auth />);
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const submitButton = screen.getByText("Sign Up");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password456" },
    });

    fireEvent.click(submitButton);

    expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
  });
});
