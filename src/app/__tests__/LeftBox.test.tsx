import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LeftBox, { Spinner } from "../LeftBox";
import "@testing-library/jest-dom";

describe("LeftBox", () => {
  it("renders the input field and submit button", () => {
    const { container } = render(
      <LeftBox
        guid={""}
        isLoading={false}
        isValidGuid={null}
        onGuidChange={function (guid: string): void {
          throw new Error("Function not implemented.");
        }}
        onSubmit={undefined}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onGuidChange when input value changes", () => {
    const onGuidChange = jest.fn();
    const { getByPlaceholderText } = render(
      <LeftBox
        guid=""
        onGuidChange={onGuidChange}
        isLoading={false}
        isValidGuid={null}
        onSubmit={undefined}
      />
    );

    const inputElement = getByPlaceholderText("Enter GUID");
    fireEvent.change(inputElement, { target: { value: "123456" } });

    expect(onGuidChange).toHaveBeenCalledWith("123456");
  });

  it("calls onSubmit when submit button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <LeftBox
        onSubmit={onSubmit}
        guid={""}
        isLoading={false}
        isValidGuid={null}
        onGuidChange={function (guid: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });

  it("renders error message when isValidGuid is false", () => {
    const { getByText } = render(
      <LeftBox
        isValidGuid={false}
        guid={""}
        isLoading={false}
        onGuidChange={function (guid: string): void {
          throw new Error("Function not implemented.");
        }}
        onSubmit={undefined}
      />
    );
    const errorMessage = getByText("Invalid GUID");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders valid image when isValidGuid is true", () => {
    const { getByAltText } = render(
      <LeftBox
        isValidGuid={true}
        guid={""}
        isLoading={false}
        onGuidChange={function (guid: string): void {
          throw new Error("Function not implemented.");
        }}
        onSubmit={undefined}
      />
    );
    const validImage = getByAltText("Valid");
    expect(validImage).toBeInTheDocument();
  });

  it("renders spinner when isLoading is true", () => {
    const { getByTestId } = render(
      <LeftBox
        isLoading={true}
        guid={""}
        isValidGuid={null}
        onGuidChange={function (guid: string): void {
          throw new Error("Function not implemented.");
        }}
        onSubmit={undefined}
      />
    );
    const spinner = getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders spinner correctly", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
