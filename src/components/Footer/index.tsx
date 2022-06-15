import React from "react";
import { Container } from "./styles";
import discord from "../../assets/logos/discord.png";
import telegram from "../../assets/logos/telegram.png";
import twitter from "../../assets/logos/twitter.png";
import Icon from "../UI/iconList";

const Footer: React.FC = () => {
  return (
    <Container>
      <h2>TransportX Logo</h2>
      <div>
        <ul>
          <Icon link='https://www.youtube.com' img={discord} />
          <Icon link='https://www.youtube.com' img={telegram} />
          <Icon link='https://www.youtube.com' img={twitter} />
        </ul>
      </div>

      <span>suport at spacecryptolab@protanmail.com</span>
    </Container>
  );
};
export default Footer;
