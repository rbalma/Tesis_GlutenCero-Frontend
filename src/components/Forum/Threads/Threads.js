import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getThreadsApi } from "../../../api/forum";
import Thread from "./Thread";

import "../Forum.css";

export default function Threads() {
  const [threads, setThreads] = useState([{
    status: '',
    created: '',
    _id: '',
    title: '',
    content: '',
    user: {
      _id: '',
      name: '',
      lastname: '',
      avatar: '',
    }
  }]);

  useEffect(() => {
    getThreadsApi()
      .then((response) => {
        if (response.ok) {
          setThreads(response.threads.docs);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className="snippet-body thread">
      <div className="container-fluid mt-100">
        <div className="d-flex flex-wrap justify-content-between">
          <div>
          <Link to="/foro/nuevo-hilo">
            <button
              type="button"
              className="btn btn-shadow btn-wide btn-primary mb-3"
            >
              <span className="btn-icon-wrapper pr-2 opacity-7 mb-3">
                  <FaPlus /> Nuevo Hilo
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header pl-0 pr-0">
            <div className="row no-gutters w-100 align-items-center">
              <div className="col ml-5"> Hilos</div>
              <div className="col-4 text-muted">
                <div className="row no-gutters align-items-center">
                  <div className="col-4"> Respuestas</div>
                  <div className="col-8"> Última Actividad</div>
                </div>
              </div>
            </div>
          </div>

          {threads.map((thread) => (
            <div className="card-body py-3" key={thread._id}>
              <Thread thread={thread} userThread={thread.user} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
