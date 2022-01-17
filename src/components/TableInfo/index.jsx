import React from "react";
import * as Styles from "./styles";
export const TableInfo = () => {
  return (
    <Styles.Container>
      <h1>Valores das chamadas</h1>
      <Styles.Table>
        <thead>
          <Styles.Tr>
            <Styles.Th>Origem</Styles.Th>
            <Styles.Th>Destino</Styles.Th>
            <Styles.Th>$/min</Styles.Th>
          </Styles.Tr>
        </thead>
        <tbody>
          <Styles.Tr>
            <td>011</td>
            <td>016</td>
            <td>1.90</td>
          </Styles.Tr>
          <Styles.Tr>
            <td>016</td>
            <td>011</td>
            <td>2.90</td>
          </Styles.Tr>
          <Styles.Tr>
            <td>011</td>
            <td>017</td>
            <td>1.70</td>
          </Styles.Tr>
          <Styles.Tr>
            <td>017</td>
            <td>011</td>
            <td>2.70</td>
          </Styles.Tr>
          <Styles.Tr>
            <td>011</td>
            <td>018</td>
            <td>0.90</td>
          </Styles.Tr>
          <Styles.Tr>
            <td>018</td>
            <td>011</td>
            <td>1.90</td>
          </Styles.Tr>
        </tbody>
      </Styles.Table>
    </Styles.Container>
  );
};
