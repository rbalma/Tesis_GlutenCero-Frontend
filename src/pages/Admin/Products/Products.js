import React, { useState } from "react";
import { Upload, Button, message, Divider, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { postListProductsApi } from "../../../api/product";
import { getAccessTokenApi } from "../../../api/auth";

export default function Products() {
  const [fileLoad, setFileLoad] = useState({
    fileList: [],
    uploading: false,
  });

  const { uploading, fileList } = fileLoad;

  const handleUpload = async() => {
    const { fileList } = fileLoad;
    const formData = new FormData();
    formData.append("file", fileList[0]);


    setFileLoad({
      uploading: true,
      ...fileLoad
    });

    const accessToken = getAccessTokenApi();

    await postListProductsApi(accessToken, formData)
    .then(res => {
        if(res.ok){
            message.success('Se actualizó el listado de productos ANMAT');
        }else{
            message.error(res.message);
        }
        setFileLoad({
            uploading: false,
            fileList: []
          });
    }).catch(err => {
        console.log(err);
        message.error('No se pudo actualizar');
        setFileLoad({
            uploading: false,
            fileList: []
          });
    })





  };

  const props = {
    onRemove: (file) => {
      setFileLoad((fileLoad) => {
        const index = fileLoad.fileList.indexOf(file);
        const newFileList = fileLoad.fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setFileLoad((fileLoad) => ({
        fileList: [...fileLoad.fileList, file],
      }));
      return false;
    },
    fileList,
  };

  return (
    <>
      <Divider orientation="left">CARGAR PLANILLA DE EXCEL</Divider>
      <Row justify="center">
        <Col span={20}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
          </Upload>
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? "Guardando" : "Guardar archivo"}
          </Button>
        </Col>
      </Row>
    </>
  );
}
