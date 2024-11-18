import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionStatusRevalidation: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
