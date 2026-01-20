import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout Component
 *
 * Main layout wrapper that includes Header, Footer, and page content.
 * Uses React Router's Outlet for nested route rendering.
 *
 * @component
 * @example
 * // In router configuration:
 * <Route element={<Layout />}>
 *   <Route path="/" element={<Home />} />
 * </Route>
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content - adds top padding to account for fixed header */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
