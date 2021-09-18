import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
const Header = (props) => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <Menu.Item name="CrowdCoin"> CrowdCoin </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <Menu.Item name="Campaign"> Campaign </Menu.Item>
        </Link>
        <Link route="/campiagns/new">
          <Menu.Item name="add">+</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
