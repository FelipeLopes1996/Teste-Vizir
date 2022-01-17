import React from "react";
import * as Styled from "./styles";
import { BsTelephonePlusFill } from "react-icons/bs";

export const Card = ({ mapInfo = [] }) => {
  return (
    <>
      {mapInfo.map((v, i) => (
        <Styled.Card key={i}>
          <div>
            <BsTelephonePlusFill size={20} />
            <h1>{v.title}</h1>
          </div>
          <p data-testid="content">{v.content}</p>
        </Styled.Card>
      ))}
    </>
  );
};
