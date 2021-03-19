import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FaMapMarkedAlt, FaUserCircle, FaClipboardList, FaBookReader } from "react-icons/fa";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        //defaultSelectedKeys={["/admin"]}
      >
        {/* <Menu.Item key="/admin">
          <Link to="/admin">
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="/admin">
          <Link to="/admin">
          <FaUserCircle className="ml-3"/>
            <span className="nac-text ml-4">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/recetas">
          <Link to="/admin/recetas">
          <FaClipboardList className="ml-3" />
            <span className="nac-text ml-4">Recetas</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/noticias">
          <Link to="/admin/noticias">
            <FaBookReader className="ml-3"/>
            <span className="nac-text ml-4">Noticias</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/mapa">
          <Link to="/admin/mapa">
          <FaMapMarkedAlt className="ml-3"/>
            <span className="nac-text ml-4">Mapa</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
