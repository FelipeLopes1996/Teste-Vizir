import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export const Table = styled.table`
  font-family: "Open Sans", sans-serif;
  position: relative;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 50%;
  margin: 0 0 4rem;
  tbody {
    tr:nth-child(odd) td {
      background: #fff;
    }

    tr:nth-child(even) td {
      background: #ccc;
    }
    td {
      text-align: center;
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: normal;
    }
  }
  @media (max-width: 768px) {
    width: 75%;
    tbody {
      td {
        font-size: 1.7rem;
      }
    }
  }
`;

export const Tr = styled.tr`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const Th = styled.th`
  background: #ccc;
  padding: 1rem;
  font-size: 1.3rem;
`;
