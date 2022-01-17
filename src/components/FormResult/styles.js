import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 2rem;
  box-shadow: 0 0 0.9rem #ccc;
  margin: 2rem 0 3rem;
  border-radius: 0.6rem;
  transition: ease-in-out 300ms;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Span = styled.span`
  margin: 0 0 1rem;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Select = styled.select`
  width: 60%;
  outline: 0;
  border: 0;
  box-shadow: none;
  flex: 1;
  padding: 1rem;
  color: #fff;
  background-color: #2c3e50;
  background-image: none;
  cursor: pointer;
  transition: ease-in-out 600ms;
  margin-bottom: 1rem;
  border-radius: 0.6rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 60%;
  padding: 1.1rem;
  color: #fff;
  background-color: #2c3e50;
  margin-bottom: 1rem;
  border-radius: 0.6rem;

  ::placeholder {
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 60%;
  padding: 1.1rem;
  border-radius: 0.6rem;
  margin-top: 1.5rem;
  color: #fff;
  background-color: #2c3e50;
  transition: ease-in-out 600ms;
  font-weight: 600;

  &:hover {
    background-color: #2c3e95;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ClearButton = styled.button`
  cursor: pointer;
  border: none;
  width: 20%;
  padding: 1.1rem;
  border-radius: 0.6rem;
  margin-top: 1.5rem;
  color: #fff;
  background-color: #2c3e50;
  transition: ease-in-out 600ms;
  font-weight: 600;

  &:hover {
    background-color: #2c3e95;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;
