import React from 'react';
import { List, Button, Tooltip, Modal as ModalAntd, notification } from "antd";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { deleteThreadApi } from "../../../../../api/forum";
import { getAccessTokenApi } from "../../../../../api/auth";
import { convertDate } from '../../../../../utils/convertDate';


import "../../ListForum.scss";

const { confirm } = ModalAntd;

export default function ListThreads(props) {

    const {notices, setReloadNotices} = props;

    return (
      <>
        <div className="list-users">
          <div className="list-users__header">
            <Button type="primary" className="btn-submit">
              <Link to={"/admin/forum-threads/form"}> Nuevo Hilo </Link>
            </Button>
          </div>

            <Threads
              notices={notices}
              setReloadNotices={setReloadNotices}
            />
        </div>
      </>
    );


    function Threads(props){
        const { notices, setReloadNotices } = props;
        
        return (
            <>
            <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={notices.docs}
            renderItem={notice => (
              <Thread
                notice={notice}
                setReloadNotices={setReloadNotices}
              />
            )}
          />
          </>
        );
      }
    
    
    function Thread (props) {
        const { notice, setReloadNotices } = props;

        const newDate = convertDate(notice.created);
        const user = notice.user;
    
        const showDeleteConfirm = () => {
            const accessToken = getAccessTokenApi();
    
            confirm({
                title: "Eliminando Hilo",
                content: `¿Estas seguro que quieres eliminar a: "${notice.title}"?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk(){
                    deleteThreadApi(accessToken, notice._id)
                            .then(response => {
                                if(response.ok){
                                    notification["success"]({
                                        message: 'El Hilo fue eliminado',
                                    });
                                    setReloadNotices(true);
                                }else{
                                notification["error"]({
                                    message: response.msg,
                                });
                            }}).catch(err => {
                                console.log(err);
                            })   
                }
            });
        }
    
        return (
            <>
            <List.Item
                actions={[
                    <Tooltip title="Ver Posts">
                    <Button type="primary">
                       <Link to={`/admin/forum-post/${notice._id}`} >Posts</Link>
                    </Button>
                    </Tooltip>,
                    <Tooltip title="Editar Hilo">
                    <Button type="primary">
                        <Link to={`/admin/forum-threads/form/${notice._id}`} ><FaEdit /></Link>
                    </Button>
                    </Tooltip>,
                    <Tooltip title="Eliminar Hilo">
                    <Button type="danger" onClick={showDeleteConfirm} >
                        <FaTrashAlt />
                    </Button>
                    </Tooltip>
                ]}
            >
            <List.Item.Meta 
                            title={`
                                ${notice.title ? notice.title : '...'}
                            `}
                            description={ `${newDate} - ${user.name} ${user.lastname}`}
            />
            </List.Item>
            </>
    
        )
    }

}