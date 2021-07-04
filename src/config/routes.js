// Layout
import LayoutAdmin from '../layout/Admin/LayoutAdmin';
import LayoutBasic from '../layout/LayoutBasic';

// Admin Pages
import AdminUsers from '../pages/Admin/Users';
import AddUser from '../components/Admin/Users/AddUserForm';
import AdminNotices from '../pages/Admin/Notices';
import AddNotice from '../components/Admin/Notices/AddNoticeForm';
import AdminRecipes from '../pages/Admin/Recipes';
import AdminProducts from '../pages/Admin/Products';



// Pages
import Home from '../pages/Home';
import Register from '../pages/RegisterForm';
import Login from '../pages/Login';
import SearchRecipe from '../pages/Recipe/SearchRecipe';
import AddRecipeForm from '../pages/Recipe/AddRecipeForm';
import ViewRecipe from '../pages/Recipe/ViewRecipe';
import Threads from '../pages/Forums/Threads';
import ProductsList from '../pages/Products/ProductsList';


//Error
import Error404 from '../pages/Error404';


const routes = [
    {
        path:"/admin",
        component: LayoutAdmin,
        exact:false,
        routes: [
            {
                path: "/admin",
                component: AdminUsers,
                exact: true
            },
            {
                path: "/admin/adduser",
                component: AddUser,
                exact: true
            },
            {
                path: "/admin/noticias",
                component: AdminNotices,
                exact: true
            },
            {
                path: "/admin/noticias/addNoticia",
                component: AddNotice,
                exact: true
            },
            {
                path: "/admin/recetas",
                component: AdminRecipes,
                exact: true
            },
            {
                path: "/admin/productos-anmat",
                component: AdminProducts,
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
        path: "/login",
        component: Login,
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
                path: "/recetas",
                component: SearchRecipe,
                exact: true
            },
            {
                path: "/recetas/nueva",
                component: AddRecipeForm,
                exact: true
            },
            {
                path: "/recetas/:id",
                component: ViewRecipe,
                exact: true
            },
            {
                path: "/foro",
                component: Threads,
                exact: true
            },
            {
                path: "/listado-productos",
                component: ProductsList,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;
