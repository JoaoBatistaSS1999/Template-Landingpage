import React from "react";
import { Container } from "./styles";

interface IProps {
  img: string;
  link: string;
}

const Icon: React.FC<IProps> = ({ img, link }) => {
  return (
    <Container>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='social-icon' />
      </a>
    </Container>
  );
};
export default Icon;
