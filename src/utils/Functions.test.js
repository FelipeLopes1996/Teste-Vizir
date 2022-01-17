import { render, screen } from "@testing-library/react";
import { calcPlans, changeForMoney } from "./functions";

describe("test ultils functions", () => {
  it("should render result destiny 011", () => {
    expect(calcPlans("011", "016", 100, 30)).toEqual({
      resultWithPlan: 146.3,
      totalResult: 190,
    });
    expect(calcPlans("011", "017", 100, 30)).toEqual({
      resultWithPlan: 130.9,
      totalResult: 170,
    });
  });
  it("should render result destiny 016", () => {
    expect(calcPlans("016", "011", 100, 30)).toEqual({
      resultWithPlan: 223.3,
      totalResult: 290,
    });
  });
  it("should render result destiny 017", () => {
    expect(calcPlans("017", "011", 100, 30)).toEqual({
      resultWithPlan: 207.9,
      totalResult: 270,
    });
  });
  it("should render result destiny 018", () => {
    expect(calcPlans("018", "011", 100, 30)).toEqual({
      resultWithPlan: 146.3,
      totalResult: 190,
    });
  });
  it("should render result  changeFormMoney", () => {
    const result = changeForMoney(30);
    expect(result).toEqual("R$ 30,00");
  });
});
