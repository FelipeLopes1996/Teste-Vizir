import React from "react";
import { render, screen } from "@testing-library/react";
import { TableResult } from ".";
import { ResultMock } from "./mock";

describe("<TableResult />", () => {
  it("should render title", () => {
    render(<TableResult />);
    const element = screen.getByText(/Resultado do cálculo/i);
    expect(element).toBeInTheDocument();
  });
  it("should render Th values", () => {
    render(<TableResult />);
    const thOrigin = screen.getByText(/Origem/i);
    expect(thOrigin).toBeInTheDocument();
    const thDestiny = screen.getByText(/Destino/i);
    expect(thDestiny).toBeInTheDocument();
    const thTime = screen.getByText(/Tempo/i);
    expect(thTime).toBeInTheDocument();
    const thPlan = screen.getByText(/Plano FaleMais/i);
    expect(thPlan).toBeInTheDocument();
    const thWithPlan = screen.getByText(/Com FaleMais/i);
    expect(thWithPlan).toBeInTheDocument();
    const thNoPlan = screen.getByText(/Sem FaleMais/i);
    expect(thNoPlan).toBeInTheDocument();
  });

  it("should render MapResult values", () => {
    render(<TableResult mapResult={ResultMock} />);
    const originResult = screen.getAllByText(/origin Result/i);
    expect(originResult).toHaveLength(2);
    const destinyChoiceResult = screen.getAllByText(/destinyChoice Result/i);
    expect(destinyChoiceResult).toHaveLength(2);
    const minutesResult = screen.getAllByText(/minutes Result/i);
    expect(minutesResult).toHaveLength(2);
    const selectPlansResult = screen.getAllByText(/selectPlan Result/i);
    expect(selectPlansResult).toHaveLength(2);
    const validResultWithPlanResult = screen.getAllByText(
      /validResultWithPlan Result/i
    );
    expect(validResultWithPlanResult).toHaveLength(2);
    const totalResult = screen.getAllByText(/totalResult Result/i);
    expect(totalResult).toHaveLength(2);
  });
  it("should render snapshot", () => {
    const { container } = render(<TableResult />);
    expect(container).toMatchSnapshot();
  });
});
