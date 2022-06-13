import styled from "styled-components";

export const Container = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: #000000;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #ffffff;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }
`;
