import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { getListProductsApi } from '../../api/product';


export default function ProductsList() {
    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
      });
      
    const [ data, setData ] = useState([]);


      useEffect(() => {
        getListProductsApi().then(response => {
          if(response.ok){
            setData(response.dataExcel);
        }
        });
      }, [])

     const handleChange = (pagination, filters, sorter) => {
        setState({
          filteredInfo: filters
        });
      };


      let { filteredInfo } = state;

      filteredInfo = filteredInfo || {};
      const columns = [
        {
          title: 'RNPA',
          dataIndex: 'rnpa',
          key: 'rnpa',
          // sorter: (a, b) => a.rnpa - b.rnpa,
          // sortOrder: sortedInfo.columnKey === 'rnpa' && sortedInfo.order,
          // ellipsis: true,
          render: text => <b>{text}</b>,
        },
        {
          title: 'Marca',
          dataIndex: 'marca',
          key: 'marca',
        },
        {
          title: 'Denominación Venta',
          dataIndex: 'denominacionventa',
          key: 'denominacionventa',
        },
        {
          title: 'Tipo Producto',
          dataIndex: 'tipoProducto',
          key: 'tipoProducto',
          align: 'center',
        },
        {
          title: 'Estado',
          dataIndex: 'estado',
          key: 'estado',
          align: 'center',
          filters: [
            { text: 'Vigente', value: 'Vigente' },
            { text: 'Baja Permanente', value: 'Baja Permanente' },
            { text: 'Baja Provisoria', value: 'Baja Provisoria' },
          ],
          filteredValue: filteredInfo.estado || null,
          onFilter: (value, record) => record.estado.includes(value),
        }
      ];
      return (
        <div className="container">
          <Table 
            columns={columns} 
            dataSource={data}
            bordered
            onChange={handleChange} />
        </div>
      );
}