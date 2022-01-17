const calcPlans = (originChoice, destinyChoice, minutes, plan) => {
  let restMinutes = minutes - plan;
  let totalResult = 0;
  let resultWithPlan = 0;
  if (originChoice === "011" && destinyChoice === "016") {
    totalResult = minutes * 1.9;
    resultWithPlan = restMinutes * 1.9 * 1.1;
    return { totalResult, resultWithPlan };
  }
  if (originChoice === "011" && destinyChoice === "017") {
    totalResult = minutes * 1.7;
    resultWithPlan = restMinutes * 1.7 * 1.1;
    return { totalResult, resultWithPlan };
  }
  if (originChoice === "011" && destinyChoice === "018") {
    totalResult = minutes * 0.9;
    resultWithPlan = restMinutes * 0.9 * 1.1;
    return { totalResult, resultWithPlan };
  }
  if (originChoice === "016" && destinyChoice === "011") {
    totalResult = minutes * 2.9;
    resultWithPlan = restMinutes * 2.9 * 1.1;
    return { totalResult, resultWithPlan };
  }
  if (originChoice === "017" && destinyChoice === "011") {
    totalResult = minutes * 2.7;
    resultWithPlan = restMinutes * 2.7 * 1.1;
    return { totalResult, resultWithPlan };
  }
  if (originChoice === "018" && destinyChoice === "011") {
    totalResult = minutes * 1.9;
    resultWithPlan = restMinutes * 1.9 * 1.1;
    return { totalResult, resultWithPlan };
  }
};

const changeForMoney = (value) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export { calcPlans, changeForMoney };
