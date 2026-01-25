import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import CRTOverlay from "../home_sections/CRTOverlay";
import IntroVideo from "../home_sections/IntroVideo";

/**
 * Layout Component
 *
 * Wraps the application with global state and UI elements like the Header, Footer,
 * Theme Management, Video Intro, and CRT Overlay.
 */
const Layout = () => {
  const [isDark, setIsDark] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Theme effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll effect (for CRT lines opacity if needed globally, mainly for Header)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change for 'Full Scroll' feel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* Global Intro Video - Shows once on mount/refresh if default true */}
      {showIntro && <IntroVideo onComplete={() => setShowIntro(false)} />}

      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-cosmic-void' : 'bg-gray-100'}`}>
        {/* Global CRT Overlay - ONLY ON HOME */}
        {location.pathname === '/' && <CRTOverlay isScrolled={scrolled} isDark={isDark} />}

        {/* Global Header with Theme Controls */}
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main Content with Page Transitions */}
        <main className="flex-1 pt-0 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.02, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Outlet context={{ isDark, setIsDark }} />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#1a0833_0%,_transparent_50%)] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#0a1a3e_0%,_transparent_40%)] opacity-20"></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
