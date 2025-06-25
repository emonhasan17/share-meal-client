import {
    createBrowserRouter
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/authpage/Login";
import SignUp from "../pages/authpage/SignUp";
import AddFood from "../pages/AddFood";
import AvailableFood from "../pages/AvailableFood";
import SingleFood from "../pages/singleFoodDetails/SingleFood";
import ManageMyFood from "../pages/manageMyFood/ManageMyFood";
import UpdateFood from "../pages/manageMyFood/UpdateFood";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyFoodRequest from "../pages/myFoodRequest/MyFoodRequest";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: '/',
                loader: ()=> fetch('https://food-sharing-server-kappa.vercel.app/foods/quantity'),
                Component: Home
            },
            {
                path: '/addFood',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: '/availableFood',
                Component: AvailableFood
            },
            {
                path: '/singleFood/:id',
                loader: ({params}) => fetch(`https://food-sharing-server-kappa.vercel.app/foods/${params.id}`),
                element: <PrivateRoutes><SingleFood></SingleFood></PrivateRoutes>
            },
            {
                path: '/manageMyFood',
                element: <PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>
            },
            {
                path: '/updateFood/:id',
                loader: ({params})=> fetch(`https://food-sharing-server-kappa.vercel.app/foods/${params.id}`),
                Component: UpdateFood
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            },
        ]
    },
    {
        path: '*',
        Component: ErrorPage

    }
]);

export default router;