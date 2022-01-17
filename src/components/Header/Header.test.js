import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("<Header />", () => {
  it("should render H1", () => {
    render(<Header />);
    const h1Element = screen.getByText(/Telzir/i);
    expect(h1Element).toBeInTheDocument();
  });
  it("should render snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
