import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter,
  // Route,
  // Link,
} from "react-router-dom";
import ProfileEdit from './pages/user/ProfileEdit';
import Login from './pages/user/Login';
import Singup from './pages/user/Singup';
import CartPage from './pages/user/CartPage.jsx'
import AddAddress from './pages/user/AddAddress.jsx';
import AllOrder from './pages/admin/AllOrder.jsx'
import AllProductList from './pages/admin/AllProductList.jsx'
import AllCategory from './pages/admin/AllCategory.jsx';
import AllUsers from './pages/admin/AllUsers.jsx';
import EditProduct from './pages/admin/EditProduct.jsx';
import HomePage from "./pages/user/HomePage.jsx";
import Payment from "./pages/user/Payment.jsx";
import AddProduct from "./pages/admin/AddProduct.jsx"
import ProductDetail from './pages/user/ProductDetail.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Main from './main.jsx';
import Error from './pages/Error.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "singup",
          element: <Singup />,
        },
        {
          path: "profile",
          element: <ProfileEdit />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "address",
          element: <AddAddress />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "category",
          element: <AllCategory />,
        },
        {
          path: "addproduct",
          element: <AddProduct />,
        },
        {
          path: "allcategory",
          element: <AllCategory />,
        },
        {
          path: "allorder",
          element: <AllOrder />,
        },
        {
          path: "allproductlist",
          element: <AllProductList />,
        },
        {
          path: "alluser",
          element: <AllUsers />,
        },
        {
          path: "editeproduct",
          element: <EditProduct />,
        },
        {
          path: "productdetail/:id",
          element: <ProductDetail />,
        },
        {
          path: "dashboard",
          element: <UserDashboard />,
        },
        {
          path: "adminDashboard",
          element: <AdminDashboard />,
        }
      ]
    },

  ]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <RouterProvider router={router} />
      </div>
    </>

    // phele routerbrowser ka use karte te ab routerprovider ka use karte hai 
  );
}

export default App;
