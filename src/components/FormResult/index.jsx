import React from "react";
import * as Styled from "./styles";
import { calcPlans } from "../../utils/functions";
import { TableResult } from "../TableResult";

export const FormResult = () => {
  const [origin, setOrigin] = React.useState("");
  const [selectPlan, setSelectPlan] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [destiny, setDestiny] = React.useState([]);
  const [isChoice, setIsChoice] = React.useState(false);
  const [destinyChoice, setDestinyChoice] = React.useState("");
  const [result, setResult] = React.useState([]);

  const getLocalStoreFee = JSON.parse(localStorage.getItem("Fee"));
  React.useEffect(() => {
    if (getLocalStoreFee) {
      setResult(getLocalStoreFee);
    }
  }, []);

  React.useEffect(() => {
    setDestiny([]);
  }, [origin]);

  React.useEffect(() => {
    switch (origin) {
      case "011":
        setDestiny([]);
        setDestiny(["016", "017", "018"]);
        break;
      case "016":
        setDestiny([]);
        setDestiny(["011"]);
        break;
      case "017":
        setDestiny([]);
        setDestiny(["011"]);
        break;
      case "018":
        setDestiny([]);
        setDestiny(["011"]);
        break;
      default:
        setOrigin("");
        setIsChoice(false);
        setDestiny([]);
        setDestinyChoice("");
        setSelectPlan("");
        setIsChoice(false);
        setMinutes("");
    }
  }, [origin]);
  React.useEffect(() => {
    if (destinyChoice !== "") {
      return setIsChoice(true);
    }
    return setIsChoice(false);
  }, [destinyChoice]);

  const clear = () => {
    const clear = setResult([]);
    const clearLocal = localStorage.setItem("Fee", JSON.stringify([]));
    return { clearLocal, clear };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origin === "") return alert("Origem precisam ser preenchidos");
    if (destinyChoice === "") return alert("Destino precisa ser selecionado");
    if (selectPlan === "") return alert("Plano precisa ser selecionado");
    if (minutes === "") return alert("Minutos precisa ser digitado");
    if (Number(minutes) < 0) return alert("valor precisa ser positivo");
    if (isNaN(minutes)) return alert("digite apenas números");

    const totalNoPlan = calcPlans(origin, destinyChoice, minutes, selectPlan);
    const { resultWithPlan, totalResult } = totalNoPlan;
    const validResultWithPlan = resultWithPlan < 0 ? 0 : resultWithPlan;

    const values = {
      origin,
      destinyChoice,
      selectPlan,
      minutes,
      validResultWithPlan,
      totalResult,
    };
    setOrigin("");
    setDestinyChoice("");
    setSelectPlan("");
    setMinutes("");
    const cloneResult = [...result, values];
    localStorage.setItem("Fee", JSON.stringify(cloneResult));
    return setResult(cloneResult);
  };

  return (
    <Styled.Container>
      <h1> Faça aqui seu cálculo de tarifas</h1>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Span>Escolha a origem da ligação</Styled.Span>
        <Styled.Select
          name="origin"
          id="origin"
          value={origin}
          data-testid="select-origin"
          onChange={({ target }) => setOrigin(target.value)}
        >
          <option value="">Selecione uma origem</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
        </Styled.Select>
        {destiny.length > 0 ? (
          <>
            <Styled.Span>Selecione seu destino de ligação</Styled.Span>
            <Styled.Select
              name="dest"
              id="dest"
              data-testid="select-destiny"
              onChange={({ target }) => setDestinyChoice(target.value)}
            >
              <option value="">Selecione um destino</option>
              {destiny.map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </Styled.Select>
          </>
        ) : null}
        {isChoice === true && destiny.length > 0 && destinyChoice !== "" ? (
          <>
            <Styled.Span>Escolha seu plano FaleMais</Styled.Span>
            <Styled.Select
              name="plan"
              id="plan"
              data-testid="select-plan"
              value={selectPlan}
              onChange={({ target }) => setSelectPlan(target.value)}
            >
              <option value="">Selecione um plano</option>
              <option value={30}>FaleMais 30</option>
              <option value={60}>FaleMais 60</option>
              <option value={120}>FaleMais 120</option>
            </Styled.Select>
          </>
        ) : null}
        {isChoice === true &&
        destiny.length > 0 &&
        destinyChoice !== "" &&
        selectPlan !== "" ? (
          <>
            <Styled.Span>Escolha a quantidade de minutos</Styled.Span>
            <Styled.Input
              value={minutes}
              name="minutes"
              id="minutes"
              type="text"
              numeric-only
              data-testid="select-minutes"
              placeholder="Digite os minutos"
              onChange={({ target }) => setMinutes(target.value)}
            />
          </>
        ) : null}
        {minutes !== "" &&
        isChoice === true &&
        destiny.length > 0 &&
        destinyChoice !== "" &&
        selectPlan !== "" ? (
          <Styled.Button type="submit">Calcular plano</Styled.Button>
        ) : null}
      </Styled.Form>
      {result.length > 0 ? <TableResult mapResult={result} /> : null}
      {result.length > 0 ? (
        <Styled.ClearButton onClick={clear}>Limpar Cálculos</Styled.ClearButton>
      ) : null}
    </Styled.Container>
  );
};
