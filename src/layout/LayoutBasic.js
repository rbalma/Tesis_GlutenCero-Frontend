import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import Footer from '../components/Home/Footer';


export default  function LayoutBasic(props) {
    const { routes } = props;
    const { Content} = Layout;

    return(
        <Layout>
            <h2>Menu Sider Basic User</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
            </Layout>
            <Footer/>
        </Layout>
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