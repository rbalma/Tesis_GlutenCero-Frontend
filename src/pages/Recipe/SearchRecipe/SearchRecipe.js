import React, {useState, useEffect} from 'react';
import { Input, Space, Row, Col, Collapse} from 'antd';
import Spinner from '../../../components/Spinner';
import Cards from '../../../components/Recipe/Cards';
import {Link} from 'react-router-dom';
import { notification } from "antd";
import queryString  from "query-string";
import { getRecipesActiveApi } from '../../../api/recipe';



import './SearchRecipe.css';

const { Search } = Input;
const { Panel } = Collapse;

export default function SearchRecipe(props) {
    
    const { location, history } = props;
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const [sort, setSort] = useState('desc');
    const [reload, setReload] = useState(false);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
      getRecipesActiveApi(true, type, sort, search, 6, page).then(response => {
        if(response?.code !== 200){
            notification["warning"]({
                message: response.message
            });
        } else {                
          setRecipes(response.recipes);
          setReload(false);
        }
    })
    .catch(() => {
        notification["error"]({
            message: "Error del servidor"
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload, page]);


    const getFilter = () => {
      setReload(true);
  }
  
  const recipeFilter = (type) => {
    setType(type);
    setReload(true);
  };

  const recipeSort = (sort) => {
    setSort(sort);
    setReload(true);
  };

    return (
      <div className="contenidoRecetas">
        <Row gutter={16} justify="center">
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <Space direction="vertical">
              <Search
              allowClear
                placeholder="Ingrese una receta"
                onChange={e => setSearch(e.target.value)}
                onSearch={() => getFilter()}
                className="search-recipe"
                enterButton
                value={search}
              />
              
              
              <Collapse ghost>
                <Panel header="FILTROS" key="1">
                <Space direction="horizontal">
                <h5>Categoría:</h5>
              <select 
              style={{ width: 250, textAlign: "center" }}
              name="type"
              onChange={(e) => recipeFilter(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="aperitivos">Aperitivos</option>
                <option value="dulces">Dulces</option>
                <option value="ensalada">Ensaladas</option>
                <option value="panes">Panes</option>
                <option value="platos principales">Platos principales</option>
                <option value="postres">Postres</option>
                <option value="sopas">Sopas</option>
            </select>
            </Space>
            <Space direction="horizontal">
              <h5>Ordenar:  </h5>
              <select 
              style={{ width: 250, textAlign: "center" }}
              name="sort"
              onChange={(e) => recipeSort(e.target.value)}
              >
                <option value="desc">Más Reciente</option>
                <option value="asc">Más Antiguos</option>
            </select>
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

        {!recipes.docs || recipes.docs.length === 0 
        ?
          <Spinner />
        : <Cards recipes={recipes} location={location} history={history} />
        }

        </div>
      </div>
    );

}

   

