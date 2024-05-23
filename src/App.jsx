import "./App.css";
import PostForm from "./components/PostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

import UserList from "./pages/UserList";
import Edituser from "./pages/Edituser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "postForm",
        element: <PostForm />,
      },
      {
        path: "userList",
        element: <UserList />,
      },
      {
        path: "update/:id",
        element: <Edituser />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <h1>RTK QUERY </h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
