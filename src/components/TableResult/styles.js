import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 750px) {
    div {
      width: 100%;
      overflow-x: scroll;
      overflow-y: unset;
      justify-content: flex-start;

      ::-webkit-scrollbar {
        width: 12px;
        height: 15px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 200px;
        border: 3px solid #ffffff;
        background-color: #2c3e50;
      }
    }
  }
`;

export const Table = styled.table`
  font-family: "Open Sans", sans-serif;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 0 0.9rem #ccc;
  width: 50%;

  tbody {
    tr:nth-child(odd) td {
      background: #fff;
    }

    tr:nth-child(even) td {
      background: #2c3e50;
      color: #fff;
    }
    td {
      text-align: center;
      padding: 1rem;
      font-size: 2rem;
      font-weight: normal;
    }
  }
`;

export const Tr = styled.tr`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const Th = styled.th`
  background: #2c3e50;
  color: #fff;
  padding: 1.7rem;
  font-size: 2rem;
`;
