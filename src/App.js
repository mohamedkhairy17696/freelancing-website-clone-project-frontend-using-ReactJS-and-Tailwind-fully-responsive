import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Gigs from "./pages/Gigs/Gigs";
import Login from "./pages/Login/Login";
import Message from "./pages/Chat/Chat";
import Messages from "./pages/Messages/Messages";
import MyGigs from "./pages/MyGigs/MyGigs";
import GigDetails from "./pages/GigDetails/GigDetails";
import Orders from "./pages/Orders/Orders";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Success/Success";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        {" "}
        <QueryClientProvider client={queryClient}>
          {" "}
          <div className="fixed top-0 z-10 w-full">
            <Nav />
            <hr class="h-px bg-gray-100 border-0 dark:bg-gray-700" />
            <Navbar />
          </div>
          <ScrollToTop />
          <Outlet />
          <Footer />
        </QueryClientProvider>
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
          element: <Home />,
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
          element: <GigDetails />,
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
    {
      path: "/pay/:id",
      element: <Pay />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
