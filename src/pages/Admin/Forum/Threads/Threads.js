import React, { useState, useEffect } from "react";
import ListThreads from "../../../../components/Admin/Forum/Threads/ListThreads";
import { getThreadsApi } from "../../../../api/forum";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { notification } from "antd";
import Pagination from "../../../../components/Pagination";

function Threads(props) {
  const { location, history } = props;
  const [notices, setNotices] = useState([]);
  const [reloadNotices, setReloadNotices] = useState(false);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getThreadsApi(5, page)
      .then((response) => {
        if (response.ok) {
          setNotices(response.threads);
        } else {
          notification["warning"]({
            message: "No hay Hilos",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setReloadNotices(false);
  }, [reloadNotices, page]);

  return (
    <>
      <ListThreads notices={notices} setReloadNotices={setReloadNotices} />
      <Pagination notices={notices} location={location} history={history} />
    </>
  );
}

export default withRouter(Threads);
