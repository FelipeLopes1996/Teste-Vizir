import React from "react";
import * as Styles from "./styles";
import { changeForMoney } from "../../utils/functions";
export const TableResult = ({ mapResult = [] }) => {
  return (
    <Styles.Container>
      <h1>Resultado do cálculo</h1>
      <div>
        <Styles.Table>
          <thead>
            <Styles.Tr>
              <Styles.Th>Origem</Styles.Th>
              <Styles.Th>Destino</Styles.Th>
              <Styles.Th>Tempo</Styles.Th>
              <Styles.Th>Plano FaleMais</Styles.Th>
              <Styles.Th>Com FaleMais</Styles.Th>
              <Styles.Th>Sem FaleMais</Styles.Th>
            </Styles.Tr>
          </thead>
          <tbody>
            {mapResult.length > 0
              ? mapResult.map((v, i) => (
                  <Styles.Tr key={i}>
                    <td>{v.origin}</td>
                    <td>{v.destinyChoice}</td>
                    <td>{v.minutes}</td>
                    <td>{`FaleMais ${v.selectPlan}`}</td>
                    <td>{changeForMoney(v.validResultWithPlan)}</td>
                    <td>{changeForMoney(v.totalResult)}</td>
                  </Styles.Tr>
                ))
              : null}
          </tbody>
        </Styles.Table>
      </div>
    </Styles.Container>
  );
};
