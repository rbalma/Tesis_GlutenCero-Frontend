import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';



// Componentes
import NavBar from '../components/Home/NavBar';
import Footer from '../components/Home/Footer';

// Estilos
import './LayoutBasic.css';


export default  function LayoutBasic(props) {
    const { routes } = props;
    const { Content} = Layout;

    
   

    return(
        <>

              <NavBar />

                <Content className="contenido">
                    <LoadRoutes routes={routes} />
                </Content>
           
            <Footer />

        </>
    )
}


function LoadRoutes({ routes }){

    return (
        <Switch>
            {routes.map((routes,index) => (
        <Route
            key= {index}
            path= {routes.path}
            exact={routes.exact}
            component= {routes.component}
        />
    ))}
        </Switch>

    )

}