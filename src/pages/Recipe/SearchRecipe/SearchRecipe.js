import React, {useState, useEffect} from 'react';
import { Input, Space, Row, Col, Select, Collapse} from 'antd';
import Spinner from '../../../components/Spinner';
import Cards from '../../../components/Recipe/Cards';
import {Link} from 'react-router-dom';
import { notification } from "antd";
import queryString  from "query-string";
import { getRecipesActiveApi } from '../../../api/recipe';



import './SearchRecipe.css';

const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

export default function SearchRecipe(props) {
    
    const { location, history } = props;
    const [recipes, setRecipes] = useState([]);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
      getRecipesActiveApi(true, 6, page).then(response => {
        if(response?.code !== 200){
            notification["warning"]({
                message: response.message
            });
        } else {                
          setRecipes(response.recipes);
        }
    })
    .catch(() => {
        notification["error"]({
            message: "Error del servidor"
        });
    });
    }, [page]);

    const onSearch = value => console.log(value);
  


    return (
      <div className="contenidoRecetas">
        <Row gutter={16} justify="center">
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <Space direction="vertical">
              <Search
                placeholder="Ingrese una receta"
                onSearch={onSearch}
                className="search-recipe"
                enterButton
              />
              
              
              <Collapse ghost>
                <Panel header="FILTROS" key="1">
                <Space direction="horizontal">
                <h5>Categoría:</h5>
              <Select defaultValue="all" 
              style={{ width: 250, textAlign: "center" }}
              size="small"
              onChange={onSearch}
              >
                <Option value="all">Todas</Option>
                <Option value="lucy">Aperitivos</Option>
                <Option value="disabled">Dulces</Option>
                <Option value="Yiminghe">Postres</Option>
            </Select>
            </Space>
            <Space direction="horizontal">
              <h5>Ordenar:  </h5>
              <Select defaultValue="desc" 
              style={{ width: 250, textAlign: "center" }}
              size="small"
              onChange={onSearch}
              >
                <Option value="desc">Más Reciente</Option>
                <Option value="lucy">Más Antiguos</Option>
            </Select>
            </Space>
                </Panel>
              </Collapse>
              </Space>
         
          </Col>
        </Row>

        <div className="container justify-content-center align-items-center">
          <Link to={"/recetas/nueva"} className="btn btn-primary">
            Nueva Receta
          </Link>

        {!recipes.docs 
        ?
          <Spinner />
        : <Cards recipes={recipes} location={location} history={history} />
        }

        </div>
      </div>
    );

}

   

