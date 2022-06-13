import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #333333;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .separator {
    width: 50%;
    height: 80%;
    padding: 10px;
    border: 1px solid #ffff00;
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    ul {
      font-size: 16px;
      border: 1px solid #00ffff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding: 5px 10px;
      gap: 20px;
    }
  }
`;
