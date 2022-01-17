import React from "react";
import { render, screen } from "@testing-library/react";
import { BannerCards } from ".";

describe("<BannerCards />", () => {
  it("should render title", () => {
    render(<BannerCards />);
    const element = screen.getByText(/Nossos Planos/i);
    expect(element).toBeInTheDocument();
  });
  it("should render content card", () => {
    render(<BannerCards />);
    const element = screen.getAllByTestId("content");
    expect(element).toHaveLength(3);
  });

  it("should render title card", () => {
    render(<BannerCards />);
    expect(screen.getAllByRole("heading")).toHaveLength(4);
  });

  it("should render snapshot", () => {
    const { container } = render(<BannerCards />);
    expect(container).toMatchSnapshot();
  });
});
