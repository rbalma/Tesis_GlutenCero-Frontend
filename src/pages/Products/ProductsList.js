import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Input, Button, Divider, message } from "antd";
import Spinner from "../../components/Spinner/Spinner";
import { getListProductsApi } from "../../api/product";

import "./productsList.css";

export default function ProductsList() {
  const [state, setState] = useState({
    filteredInfo: null,
  });
  const [form] = Form.useForm();

  const [data, setData] = useState([]);
  const [ dataFilter, setDataFilter ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getProducts();


  }, []);


  const getProducts = async() => {
   await getListProductsApi().then((response) => {
      if (response.ok) {
        setData(response.dataExcel);
        setDataFilter(response.dataExcel);
        setLoading(false);
      }
    }).catch(err =>{
      console.log(err);
      setLoading(false);
      message.error('No se pueden cargar los productos');
    })
  }


  const handleChange = (pagination, filters, sorter) => {
    setState({
      filteredInfo: filters,
    });
  };

  let { filteredInfo } = state;

  filteredInfo = filteredInfo || {};

  const columns = [
    {
      title: "RNPA",
      dataIndex: "rnpa",
      key: "rnpa",
      // sorter: (a, b) => a.rnpa - b.rnpa,
      // sortOrder: sortedInfo.columnKey === 'rnpa' && sortedInfo.order,
      // ellipsis: true,
      render: (text) => <i>{text}</i>,
      width: "10%",
    },
    {
      title: "Marca",
      dataIndex: "marca",
      key: "marca",
    },
    {
      title: "Denominación Venta",
      dataIndex: "denominacionventa",
      key: "denominacionventa",
    },
    {
      title: "Tipo Producto",
      dataIndex: "tipoProducto",
      key: "tipoProducto",
      align: "center",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      align: "center",
      filters: [
        { text: "Vigente", value: "Vigente" },
        { text: "Baja Permanente", value: "Baja Permanente" },
        { text: "Baja Provisoria", value: "Baja Provisoria" },
      ],
      filteredValue: filteredInfo.estado || null,
      onFilter: (value, record) => record.estado.includes(value),
    },
  ];

  const onFinish = (values) => {

    if(!values.rnpa && !values.marca && !values.denominacionVenta && !values.tipoProducto){
      message.error('Todos los campos están vacios');
      return;
    }


    if(!values.rnpa){
      values.rnpa = '$';
    }

    if(!values.marca){
      values.marca = '$';
    }

    if(!values.denominacionVenta){
      values.denominacionVenta = '$';
    }

    if(!values.tipoProducto){
      values.tipoProducto = '$';
    }

    console.log("Received values of form: ", values);

    let resultadosBusqueda= data.filter((elemento) => {
      if(elemento.marca.toString().toLowerCase().includes(values.marca.toLowerCase())
      || elemento.tipoProducto.toString().toLowerCase().includes(values.tipoProducto.toLowerCase())
      || elemento.denominacionventa.toString().toLowerCase().includes(values.denominacionVenta.toLowerCase())
      || elemento.rnpa.toString().toLowerCase().includes(values.rnpa.toLowerCase())
      ){
        return elemento;
      }
      return null;
    });
    setDataFilter(resultadosBusqueda);
  };

  return (
    <div className="container">
      <br />

      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="rnpa" label="RNPA">
              <Input placeholder="Ej. 17003151" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item name="denominacionVenta" label="Denom. venta">
              <Input placeholder="Ej. Yogur endulzado sabor frutilla" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="marca" label="Marca">
              <Input placeholder="Ej. La Serenísima" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item name="tipoProducto" label="Tipo Producto">
              <Input placeholder="Ej. Yogures" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            span={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => {
                form.resetFields();
                setDataFilter(data);
              }}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
      <Divider />

    { loading? <Spinner> </Spinner>
      : <Table
        columns={columns}
        dataSource={dataFilter}
        rowKey={ record => record.id}
        bordered
        pagination={{ position: ["topRight"] }}
        onChange={handleChange}
       />
    }

     
      <br />
    </div>
  );
}
