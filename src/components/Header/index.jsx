import React from "react";
import * as Styles from "./styles";
import { IoIosCellular } from "react-icons/io";
export const Header = () => {
  return (
    <Styles.Header>
      <IoIosCellular size={25} />
      <h1>Telzir</h1>
    </Styles.Header>
  );
};
