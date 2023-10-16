import { render, screen } from "@testing-library/react";
import RightBox from "../RightBox";
import "@testing-library/jest-dom";

describe("RightBox", () => {
  it("renders an image with the specified URL", () => {
    const imageUrl = "/einstein.jpg";
    render(<RightBox imageUrl={imageUrl} />);
    const image = screen.getByAltText("right-image");
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Feinstein.jpg&w=3840&q=75"
    );
  });
});
