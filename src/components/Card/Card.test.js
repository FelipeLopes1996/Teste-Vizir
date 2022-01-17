import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from ".";
import { mockInfoCard } from "./mock";

describe("<Card />", () => {
  it("should render titles card and contents", () => {
    render(<Card mapInfo={mockInfoCard} />);
    expect(screen.getByText("Plano Fale + 30")).toBeInTheDocument();
    expect(screen.getByText("Plano Fale + 60")).toBeInTheDocument();
    expect(screen.getByText("Plano Fale + 120")).toBeInTheDocument();

    expect(screen.getByText("text 1")).toBeInTheDocument();
    expect(screen.getByText("text 2")).toBeInTheDocument();
    expect(screen.getByText("text 3")).toBeInTheDocument();
  });
  it("should render snapshot", () => {
    const { container } = render(<Card mapInfo={mockInfoCard} />);
    expect(container).toMatchSnapshot();
  });
});
