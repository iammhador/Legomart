import { createBrowserRouter } from "react-router-dom";
import Main from "../Componets/Main/Main";
import Product from "../Componets/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Product></Product> },
      { path: "/product", element: <Product></Product> },
    ],
  },
]);
