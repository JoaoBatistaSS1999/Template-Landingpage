import React from "react";
import { Container } from "./styles";

interface IProps {
  title: string;
}

const Button: React.FC<IProps> = ({ title }) => {
  return <Container>{title}</Container>;
};
export default Button;
