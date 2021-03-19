import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { FaUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function EditUserForm(props) {
  const { history } = props;
  const [userData, setUserData] = useState({});

  const addUser = event => {
    //event.preventDefault();

    if (
      !userData.name ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password ||
      !userData.repeatPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      });
    } else if (userData.password !== userData.repeatPassword) {
      notification["error"]({
        message: "Las contraseñas tienen que ser iguales."
      });
    } else {
      const accessToken = getAccessTokenApi();

      signUpAdminApi(accessToken, userData)
        .then(response => {
          notification["success"]({
            message: response
          });
          setUserData({});
           //Redireccionar
           history.push('/admin');
        })
        .catch(err => {
          notification["error"]({
            message: err
          });
        });
    }
  };

  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;
 


  return (
    <>
    <h1 className="titulo text-uppercase mt-4">Nuevo Usuario</h1>
    <Form className="form-add" onFinish={addUser}>
      <Row gutter={16} justify="center">
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Input
              prefix={<FaUser />}
              placeholder="Nombre"
              value={userData.name}
              onChange={e => setUserData({ ...userData, name: e.target.value })}
            />
          </Form.Item>
        </Col>
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Input
              prefix={<FaUser />}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={e =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16} justify="center">
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Input
              prefix={<FaRegEnvelope />}
              placeholder="Correo electronico"
              value={userData.email}
              onChange={e =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Select
              placeholder="Selecióna un rol"
              onChange={e => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="user">Usuario</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={12} justify="center">
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Input.Password
              prefix={<FaLock />}
              type="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={e =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <Form.Item>
            <Input.Password
              prefix={<FaLock />}
              type="password"
              placeholder="Repetir contraseña"
              value={userData.repeatPassword}
              onChange={e =>
                setUserData({ ...userData, repeatPassword: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}
