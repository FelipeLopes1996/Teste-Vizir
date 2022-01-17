import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin: 2rem 0 1rem;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;
