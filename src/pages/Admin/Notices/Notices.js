import React, {useState, useEffect} from "react";
import ListNotices from "../../../components/Admin/Notices/ListNotices";
import {getNoticesApi} from "../../../api/notice";
import { withRouter } from 'react-router-dom';
import queryString  from "query-string";
import { notification } from "antd";
import Pagination from '../../../components/Pagination';



function Notices(props) {

    const { location, history } = props;
    const [notices, setNotices] = useState([]);
    const [reloadNotices, setReloadNotices] = useState(false);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getNoticesApi(6, page).then(response => {
            if(response?.code !== 200){
                notification["warning"]({
                    message: response.message
                });
            } else {                
                setNotices(response.notice);
            }
        })
        .catch(() => {
            notification["error"]({
                message: "Error del servidor"
            });
        });
        setReloadNotices(false);
    }, [reloadNotices, page]);

    return (
        <>
            <ListNotices notices={notices} setReloadNotices={setReloadNotices} />
            <Pagination notices={notices} location={location} history={history} />
        </>
    )

}

export default withRouter(Notices);