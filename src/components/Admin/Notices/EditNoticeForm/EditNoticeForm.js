import React, { useState, useEffect } from "react";
import {Form, Input, Button, Row, Col, notification, DatePicker} from "antd";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { updateNoticeApi } from "../../../../api/notice";
import { getAccessTokenApi } from "../../../../api/auth";
import moment from 'moment';

import "../../Users/EditUserForm/EditUserForm.scss";

export default function EditUserForm(props) {
    const {notice, setIsVisibleModal, setReloadNotices } = props;
    const [noticeData, setNoticeData] = useState({});



    useEffect(() => {
      setNoticeData({
        title: notice.title,
        date: notice.date,
        description: notice.description
      });
    }, [notice]);



    
  const updateNotice = e => {
      //e.preventDefault();

      const token = getAccessTokenApi();
      let noticeUpdate = noticeData;

      if (
        !noticeUpdate.title ||
        !noticeUpdate.description ||
        !noticeUpdate.date
      ) {
        notification["error"]({
          message: "El título, la fecha y la descripción son obligatorios.",
        });
        return;
      } else {
        if (!noticeUpdate.image) {
          updateNoticeApi(token, noticeUpdate, notice._id).then((result) => {
            notification["success"]({
              message: result.message,
            });
            setIsVisibleModal(false);
            setReloadNotices(true);
            return;
          });
        } else {
          if (
            noticeUpdate.image.type !== "image/jpeg" &&
            noticeUpdate.image.type !== "image/png"
          ) {
            notification["error"]({
              message: "El formato de la imagen debe ser JPG - PNG.",
            });
          } else {
            if (noticeUpdate.image.size > 1000000) {
              notification["error"]({
                message: "La imagen debe tener un tamaño menor a 1 MB.",
              });
            } else {
              updateNoticeApi(token, noticeUpdate, notice._id).then(
                (result) => {
                  notification["success"]({
                    message: result.message,
                  });
                 setIsVisibleModal(false); 
                 setReloadNotices(true);

                }
              );
            }
          }
        }
      }




       
    };

    return (
        <div className="edit-user-form">
            <EditForm noticeData={noticeData} setNoticeData={setNoticeData} updateNotice={updateNotice} />
        </div>
    );
}


function EditForm(props) {
    const { noticeData, setNoticeData, updateNotice } = props;

    return (
      <>
      <Form className="form-edit" onFinish={updateNotice}>
      <Row gutter={32} justify="center">
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
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
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
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
          </Row>
          <Row gutter={16} justify="center">
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
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
            Actualizar Noticia
          </Button>
        </Form.Item>
      </Form>
      </>
    );
  }
  