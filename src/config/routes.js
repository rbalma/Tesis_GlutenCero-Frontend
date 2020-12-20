// Layout
import LayoutAdmin from '../layout/LayoutAdmin';
import LayoutBasic from '../layout/LayoutBasic';

// Admin Pages
import Admin from '../pages/Admin';
import Login from '../pages/Admin/Login';
import AdminUsers from '../pages/Admin/Users';

// Pages
import Home from '../pages/Home';
import Register from '../pages/Admin/RegisterForm';

//Other
import Error404 from '../pages/Error404';

const routes = [
    {
        path:"/admin",
        component: LayoutAdmin,
        exact:false,
        routes: [
            {
                path: "/admin",
                component: Admin,
                exact: true
            },
            {
                path: "/admin/login",
                component: Login,
                exact: true
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/singup",
        component: Register,
        exact: true
    },
    {
        path:"/",
        component: LayoutBasic,
        exact:false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;
