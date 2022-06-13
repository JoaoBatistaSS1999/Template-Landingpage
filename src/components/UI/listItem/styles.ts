import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #3cefff;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
