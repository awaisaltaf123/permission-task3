import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyPage from "../page";

// Use jest.useFakeTimers() to control timers
beforeAll(() => {
  jest.useFakeTimers();
});

// Restore the original timer implementation
afterAll(() => {
  jest.useRealTimers();
});

describe("MyPage", () => {
  it("MyPage component renders correctly", () => {
    render(<MyPage />);
    const inputElement = screen.getByPlaceholderText("Enter GUID");
    expect(inputElement).toBeInTheDocument();
  });

  it("MyPage component handles form submission", async () => {
    render(<MyPage />);
    const inputElement = screen.getByPlaceholderText("Enter GUID");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(inputElement, { target: { value: "valid-guid" } });
    fireEvent.click(submitButton);

    // Advance timers by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("Invalid GUID")).toBeInTheDocument();
  });
});
