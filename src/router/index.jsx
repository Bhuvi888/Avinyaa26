import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home, Events, About, Contact } from "../pages";

/**
 * Application Router Configuration
 *
 * Defines all routes with the Layout wrapper.
 * Each page is lazy-loadable for code splitting in the future.
 *
 * @example
 * // Usage in main.jsx:
 * <RouterProvider router={router} />
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
