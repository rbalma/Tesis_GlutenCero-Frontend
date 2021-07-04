import React, {useState} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { Layout} from 'antd';
import useAuth from '../../hooks/useAuth';
import MenuTop from '../../components/Admin/MenuTop';
import MenuSider from '../../components/Admin/MenuSider';
import AdminSignIn from "../../pages/Login";

import "./LayoutAdmin.scss";



export default  function LayoutBasic(props) {

    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content} = Layout;
    const {user, isLoading} = useAuth();


    if (!user && !isLoading){
        return(
            <>
                <Route path="/login" component={AdminSignIn} />
                <Redirect to="/login" /> 
                
            </>
        );
    }

    if (user && !isLoading){
    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin_header">
                   <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>
                <Content className="layout-admin_content">
                    <LoadRoutes routes={routes} />
                </Content>
            </Layout>
        </Layout>
    );
    }

    return null;

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