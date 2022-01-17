import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { FormResult } from ".";

describe("<FormResult />", () => {
  it("should render title and subTitle", () => {
    render(<FormResult />);
    const title = screen.getByText(/Faça aqui seu cálculo de tarifas/i);
    expect(title).toBeInTheDocument();

    const subTitleOrigim = screen.getByText(/Escolha a origem da ligação/i);
    expect(subTitleOrigim).toBeInTheDocument();
  });

  it("should render option values", () => {
    render(<FormResult />);
    const optionValueSelect = screen.getByText(/Selecione uma origem/i);
    expect(optionValueSelect).toBeInTheDocument();
    const optionValueEleven = screen.getByText(/011/i);
    expect(optionValueEleven).toBeInTheDocument();
    const optionValueSixteen = screen.getByText(/016/i);
    expect(optionValueSixteen).toBeInTheDocument();
    const optionValueSeventeen = screen.getByText(/017/i);
    expect(optionValueSeventeen).toBeInTheDocument();
    const optionValueEighteen = screen.getByText(/018/i);
    expect(optionValueEighteen).toBeInTheDocument();
  });
  it("should render choice select origin and render choice destiny", () => {
    render(<FormResult />);

    const selectOrigin = screen.getByTestId("select-origin");
    expect(selectOrigin).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("select-origin"), {
      target: { value: "011" },
    });
    const titleSelectDestiny = screen.getByText(
      "Selecione seu destino de ligação"
    );

    expect(titleSelectDestiny).toBeInTheDocument();

    const selectOptionsDefaultValue = screen.getByText("Selecione um destino");

    expect(selectOptionsDefaultValue).toBeInTheDocument();
  });
  it("should render Escolha seu plano FaleMais and options plans", () => {
    render(<FormResult />);
    fireEvent.change(screen.getByTestId("select-origin"), {
      target: { value: "011" },
    });

    const selectDestiny = screen.getByTestId("select-destiny");
    expect(selectDestiny).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("select-destiny"), {
      target: { value: "016" },
    });

    const subTitlePlan = screen.getByText("Escolha seu plano FaleMais");
    expect(subTitlePlan).toBeInTheDocument();

    const defaultValueChoicePlan = screen.getByText("Selecione um plano");
    expect(defaultValueChoicePlan).toBeInTheDocument();

    const talkMoreThirty = screen.getByText("FaleMais 30");
    expect(talkMoreThirty).toBeInTheDocument();

    const talkMoreSixty = screen.getByText("FaleMais 60");
    expect(talkMoreSixty).toBeInTheDocument();

    const talkMoreOneHundredTwenty = screen.getByText("FaleMais 120");
    expect(talkMoreOneHundredTwenty).toBeInTheDocument();
  });

  it("should render Escolha a quantidade de minutos", () => {
    render(<FormResult />);
    fireEvent.change(screen.getByTestId("select-origin"), {
      target: { value: "011" },
    });

    fireEvent.change(screen.getByTestId("select-destiny"), {
      target: { value: "016" },
    });

    fireEvent.change(screen.getByTestId("select-plan"), {
      target: { value: "30" },
    });

    const selectMinutes = screen.getByText("Escolha a quantidade de minutos");
    expect(selectMinutes).toBeInTheDocument();
  });
  it("should render Calcular plano", () => {
    render(<FormResult />);
    fireEvent.change(screen.getByTestId("select-origin"), {
      target: { value: "011" },
    });

    fireEvent.change(screen.getByTestId("select-destiny"), {
      target: { value: "016" },
    });

    fireEvent.change(screen.getByTestId("select-plan"), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByTestId("select-minutes"), {
      target: { value: "100" },
    });
    const buttonSubmit = screen.getByText("Calcular plano");
    expect(buttonSubmit).toBeInTheDocument();

    fireEvent.click(buttonSubmit);

    const test = screen.getByText("Limpar Cálculos");
    expect(test).toBeInTheDocument();
  });

  it("should render Limpar Cálculos", () => {
    render(<FormResult />);
    fireEvent.change(screen.getByTestId("select-origin"), {
      target: { value: "011" },
    });

    fireEvent.change(screen.getByTestId("select-destiny"), {
      target: { value: "016" },
    });

    fireEvent.change(screen.getByTestId("select-plan"), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByTestId("select-minutes"), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByText(/Calcular plano/i));

    const clearButton = screen.getByText("Limpar Cálculos");
    expect(clearButton).toBeInTheDocument();
  });
});
