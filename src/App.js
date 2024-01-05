import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogIn from "./pages/LogIn";

import AppLayout from "./components/AppLayout";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LogIn />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
