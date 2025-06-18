import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import RedirectIfAuth from "./components/RedirectIfAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectIfAuth><Login /></RedirectIfAuth>,
  },
  {
    path: "/login",
    element: <RedirectIfAuth><Login /></RedirectIfAuth>,
  },
  {
    path: "/register",
    element: <RedirectIfAuth><Register /></RedirectIfAuth>,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}