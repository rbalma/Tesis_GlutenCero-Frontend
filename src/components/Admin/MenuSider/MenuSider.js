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
        //defaultSelectedKeys={["/admin/users"]}
      >
        {/* <Menu.Item key="/admin">
          <Link to="/admin">
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="/admin/users">
          <Link to="/admin/users">
          <FaUserCircle className="ml-3"/>
            <span className="nac-text ml-4">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <Link to="/admin/menu">
          <FaClipboardList className="ml-3" />
            <span className="nac-text ml-4">Recetas</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/courses">
          <Link to="/admin/courses">
            <FaBookReader className="ml-3"/>
            <span className="nac-text ml-4">Noticias</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/blog">
          <Link to="/admin/blog">
          <FaMapMarkedAlt className="ml-3"/>
            <span className="nac-text ml-4">Blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
