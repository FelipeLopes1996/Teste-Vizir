import styled from "styled-components";

export const Card = styled.div`
  max-width: 30rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0.4rem #ccc;
  transition: ease-in-out 400ms;
  z-index: 1;
  &:hover {
    box-shadow: 0 0 4rem #ccc;
    transform: scale(1.05);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    h1 {
      font-size: 2.5rem;
      margin-left: 1rem;
      @media (max-width: 768px) {
        h1 {
          font-size: 2.2rem;
        }
      }
    }
  }
  p {
    font-size: 2rem;
    text-align: center;
    line-height: 125%;
  }
`;
