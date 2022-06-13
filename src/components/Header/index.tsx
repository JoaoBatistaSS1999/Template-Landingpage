import React from "react";
import Button from "../UI/button";
import ListItem from "../UI/listItem";
import { Navigation } from "./styles";

const Header: React.FC = () => {
  return (
    <Navigation>
      <div className='separator'>
        <h1>Logo</h1>
      </div>

      <div className='separator right'>
        <ul>
          <ListItem title={"project"} />
          <ListItem title={"roadmap"} />
          <ListItem title={"tecnology"} />
          <ListItem title={"team"} />
        </ul>
        <Button title='Marketplace' />
      </div>
    </Navigation>
  );
};
export default Header;
