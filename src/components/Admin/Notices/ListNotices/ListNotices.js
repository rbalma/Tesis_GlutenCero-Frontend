import React, { useState, useEffect } from 'react';
import { List, Avatar, Button, Tooltip, Modal as ModalAntd, notification } from "antd";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from "../../../Modal";
import EditNoticeForm from "../EditNoticeForm";
import {getImageApi, deleteNoticeApi } from "../../../../api/notice";
import { getAccessTokenApi } from "../../../../api/auth";
import moment from 'moment';
import NoAvatar from "../../../../assets/img/no-avatar.png";

import "./ListNotices.scss";

const { confirm } = ModalAntd;

export default function ListNotices(props) {

    const {notices, setReloadNotices} = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    return (
      <>
        <div className="list-users">
          <div className="list-users__header">
            <Button type="primary" className="btn-submit">
              <Link to={"/admin/noticias/addNoticia"}> Nueva Noticia </Link>
            </Button>
          </div>

            <Notices
              notices={notices}
              setIsVisibleModal={setIsVisibleModal}
              setModalTitle={setModalTitle}
              setModalContent={setModalContent}
              setReloadNotices={setReloadNotices}
            />

          <Modal
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
          >
            {modalContent}
          </Modal>
        </div>
      </>
    );


    function Notices(props){
        const { notices, setIsVisibleModal, setModalTitle, setModalContent, setReloadNotices } = props;
    
        const editNotice = notice => {
            setIsVisibleModal(true);
            setModalTitle(`Editar ${notice.title}`);
            setModalContent(<EditNoticeForm notice={notice} setIsVisibleModal={setIsVisibleModal} setReloadNotices={setReloadNotices} />);
        }
    
        return (
            <>
            <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={notices.docs}
            renderItem={notice => (
              <Notice
                notice={notice}
                editNotice={editNotice}
                setReloadNotices={setReloadNotices}
              />
            )}
          />
          </>
        );
      }
    
    
    function Notice(props) {
        const { notice, editNotice, setReloadNotices } = props;
        const [image, setImage] = useState(null);

        const day = moment(notice.date).format("DD");
        const month = moment(notice.date).format("MM");
        const year = moment(notice.date).format("YYYY");
      
        useEffect(() => {
          if (notice.image) {
            getImageApi(notice.image).then(response => {
                setImage(response);
            });
          } else {
            setImage(null);
          }
        }, [notice]);
    
    
        const showDeleteConfirm = () => {
            const accessToken = getAccessTokenApi();
    
            confirm({
                title: "Eliminando Noticia",
                content: `¿Estas seguro que quieres eliminar a ${notice.title}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk(){
                    deleteNoticeApi(accessToken, notice._id)
                            .then(response => {
                                notification["success"]({
                                    message: response
                                });
                                setReloadNotices(true);
                            })
                            .catch(err => {
                                notification["error"]({
                                    message: err
                                });
                            })
                }
            })
        }
    
        return (
            <>
            <List.Item
                actions={[
                    <Tooltip title="Editar Noticia">
                    <Button type="primary" onClick={() => editNotice(notice)} >
                        <FaEdit />
                    </Button>
                    </Tooltip>,
                    <Tooltip title="Eliminar Noticia">
                    <Button type="danger" onClick={showDeleteConfirm} >
                        <FaTrashAlt />
                    </Button>
                    </Tooltip>
                ]}
            >
            <List.Item.Meta 
                            avatar={<Avatar src={image ? image : NoAvatar} />}
                            title={`
                                ${notice.title ? notice.title : '...'}
                            `}
                            description={ `${day}/${month}/${year}`}
            />
            </List.Item>
            </>
    
        )
    }

}