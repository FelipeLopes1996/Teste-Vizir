import React from "react";
import { render, screen } from "@testing-library/react";
import { TableInfo } from ".";
describe("<TableInfo />", () => {
  it("should render title", () => {
    render(<TableInfo />);
    const element = screen.getByText(/Valores das chamadas/i);
    expect(element).toBeInTheDocument();
  });
  it("should render Th values", () => {
    render(<TableInfo />);
    const thOrigin = screen.getByText(/Origem/i);
    expect(thOrigin).toBeInTheDocument();
    const thDestiny = screen.getByText(/Destino/i);
    expect(thDestiny).toBeInTheDocument();

    const thMinutes = screen.getByText("$/min");
    expect(thMinutes).toBeInTheDocument();
  });
  it("should render Td values", () => {
    render(<TableInfo />);
    const tdEleven = screen.getAllByText(/011/i);
    expect(tdEleven).toHaveLength(6);
    const tdSixteen = screen.getAllByText(/016/i);
    expect(tdSixteen).toHaveLength(2);

    const tdSeventeen = screen.getAllByText(/017/i);
    expect(tdSeventeen).toHaveLength(2);

    const tdEighteen = screen.getAllByText(/018/i);
    expect(tdEighteen).toHaveLength(2);

    const tdOneDotNine = screen.getAllByText(/1.90/i);
    expect(tdOneDotNine).toHaveLength(2);
    const tdTwoDotNine = screen.getByText(/2.90/i);
    expect(tdTwoDotNine).toBeInTheDocument();
    const tdOneDotSeven = screen.getByText(/1.70/i);
    expect(tdOneDotSeven).toBeInTheDocument();
    const tdTwoDotSeven = screen.getByText(/2.70/i);
    expect(tdTwoDotSeven).toBeInTheDocument();
    const tdZeroDotSeven = screen.getByText(/0.90/i);
    expect(tdZeroDotSeven).toBeInTheDocument();
  });
  it("should render snapshot", () => {
    const { container } = render(<TableInfo />);
    expect(container).toMatchSnapshot();
  });
});
