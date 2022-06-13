import React from "react";
import { Container } from "./styles";

interface IPops {
  title: string;
}

const ListItem: React.FC<IPops> = ({ title }) => {
  return <Container>{title}</Container>;
};
export default ListItem;
