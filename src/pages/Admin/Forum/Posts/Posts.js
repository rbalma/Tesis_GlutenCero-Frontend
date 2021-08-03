import React, {useState, useEffect} from "react";
import ListPosts from "../../../../components/Admin/Forum/posts/ListPosts";
import { getPostsApi } from "../../../../api/forum";
import { withRouter } from 'react-router-dom';
import queryString  from "query-string";
import { notification } from "antd";
import Pagination from '../../../../components/Pagination';


function Posts(props) {

    const { location, history } = props;
    const { id } = props.match.params;
    
    const [notices, setNotices] = useState([]);
    const [reloadNotices, setReloadNotices] = useState(false);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getPostsApi(id, 6, page).then(response => {
            if(response.ok){
                setNotices(response.posts); 
            } else {                
                notification["warning"]({
                    message: 'No hay Posts'
                });
            }
        })
        .catch(() => {
            notification["error"]({
                message: "Error del servidor"
            });
        });
        setReloadNotices(false);
    }, [id, reloadNotices, page]);

    return (
        <>
        <ListPosts notices={notices} threadId={id} setReloadNotices={setReloadNotices} />   
        <Pagination notices={notices} location={location} history={history} /> 
        </>
    )

}

export default withRouter(Posts);