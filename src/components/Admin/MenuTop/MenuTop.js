import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/img/logoBlanco.png";
import {logout} from '../../../api/auth';
import { FaPowerOff, FaOutdent, FaIndent } from "react-icons/fa";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  let Icontype = menuCollapsed ? FaIndent : FaOutdent;

  const logoutUser = () => {
    logout();
    //window.location.reload();
    window.location.href = "/";
  }

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={Logo}
          alt="Agustin Navarro Galdon"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
        <Icontype />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
        <FaPowerOff />
        </Button>
      </div>
    </div>
  );
}
