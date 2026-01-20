import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

/**
 * App Component
 *
 * Root component that provides the router context.
 * All routing and layout is handled by the router configuration.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
