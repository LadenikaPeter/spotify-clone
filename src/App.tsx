import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootLayout from "./layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <LoginPage /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
