import React from "react";
import { Card } from "../Card";
import * as Styled from "./styles";
import { mockInfoCards } from "./mock";

export const BannerCards = () => {
  return (
    <>
      <Styled.Title>Nossos Planos</Styled.Title>
      <Styled.WrapperCards>
        <Card data-testid="card" mapInfo={mockInfoCards} />
      </Styled.WrapperCards>
    </>
  );
};
