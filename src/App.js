import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Gig from "./pages/Gig/Gig";
import Gigs from "./pages/Gigs/Gigs";
import Login from "./pages/Login/Login";
import Message from "./pages/Message/Message";
import Messages from "./pages/Messages/Messages";
import MyGigs from "./pages/MyGigs/MyGigs";
import Orders from "./pages/Orders/Orders";
import Register from "./pages/Register/Register";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
