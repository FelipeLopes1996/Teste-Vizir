import React from "react";
import { Header } from "../../components/Header";
import { TableInfo } from "../../components/TableInfo";
import { BannerCards } from "../../components/BannerCards";
import { FormResult } from "../../components/FormResult";
export const Home = () => {
  return (
    <>
      <Header />
      <FormResult />
      <TableInfo />
      <BannerCards />
    </>
  );
};
