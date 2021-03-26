import React, { useState } from "react";
import { Form, Input, Button, Row, Col, notification,  DatePicker } from "antd";
import {  FaRegEnvelope, FaLock } from "react-icons/fa";
import { newNoticeApi } from "../../../../api/notice";
import { getAccessTokenApi } from "../../../../api/auth";
import moment from 'moment';

import "../../Users/AddUserForm/AddUserForm.scss";

export default function AddUserForm(props) {
  const { history } = props;
  const [noticeData, setNoticeData] = useState({});


  const addNotice = event => {
    //event.preventDefault();
    if (
      !noticeData.title ||
      !noticeData.date ||
      !noticeData.image ||
      !noticeData.description
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      });
    } else {
        if(noticeData.image.type !== "image/jpeg" && noticeData.image.type !== "image/png"){
            notification["error"]({
                message: "El formato de la imagen debe ser JPG - PNG."
              });
        } else {
            if(noticeData.image.size > 1000000){
                notification["error"]({
                    message: "La imagen debe tener un tamaño menor a 1 MB."
                  });
            } else{
                const accessToken = getAccessTokenApi();

                newNoticeApi(accessToken, noticeData)
                  .then(response => {
                    notification["success"]({
                      message: response
                    });
                    setNoticeData({});
                     //Redireccionar
                     history.push('/admin/noticias');
                  })
                  .catch(err => {
                    notification["error"]({
                      message: err
                    });
                  });
            }
        }
    }
  };

  return (
    <div className="add-user-form">
      <AddForm
        noticeData={noticeData}
        setNoticeData={setNoticeData}
        addNotice={addNotice}
      />
    </div>
  );
}

function AddForm(props) {
  const { noticeData, setNoticeData, addNotice } = props;

  return (
    <>
      <h1 className="titulo text-uppercase mt-4">Nueva Noticia</h1>
      <Form className="form-add" onFinish={addNotice}>
        <Row gutter={32} justify="center">
        <Col xs={16} sm={16} md={8} lg={16} xl={16}>
          <Form.Item>
            <Input
              placeholder="Título"
              value={noticeData.title}
              onChange={(e) =>
                setNoticeData({ ...noticeData, title: e.target.value })
              }
            />
          </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} justify="center">
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <Form.Item>
              <DatePicker
                style={{width: "100%"}}
                format="DD/MM/YYYY"
                prefix={<FaRegEnvelope />}
                placeholder="Fecha de publicación"
                value={noticeData.date && moment(noticeData.date)}
                onChange={(e, value) =>
                  setNoticeData({ ...noticeData, date: moment(value, "DD/MM/YYYY").toISOString() })
                }
              />
            </Form.Item>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <Form.Item>
            <input 
                type="file"
                name="image"
                onChange={(e) =>
                setNoticeData({ ...noticeData, image: e.target.files[0] })
                }
            />

            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} justify="center">
        <Col xs={16} sm={16} md={8} lg={16} xl={16}>
          <Form.Item>
            <Input.TextArea
              style={{height: "200px"}}
              prefix={<FaLock />}
              placeholder="Descripción"
              value={noticeData.description}
              onChange={(e) =>
                setNoticeData({ ...noticeData, description: e.target.value })
              }
            />
          </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-submit">
            Crear Noticia
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
