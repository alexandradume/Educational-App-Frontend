import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LogIn from "../LogIn";

test("renders sign in button", () => {
  render(typeof <LogIn />);
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});

test("clicking sign in button redirects to sign in page", async () => {
  const { getByText, history } = render(<LogIn />);
  const signInButton = getByText(/Sign In/i);
  fireEvent.click(signInButton);
  await waitFor(() => {
    expect(history.location.pathname).toBe("/signin");
  });
});
