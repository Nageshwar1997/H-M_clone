import { FaMoon, FaSun } from "react-icons/fa6";
import "./App.css";
import Footer from "./customer/components/footer/Footer";
import Header from "./customer/components/header/Header";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme/theme.context";
import { Outlet } from "react-router-dom";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full h-full max-h-screen min-h-screen bg-white dark:bg-darkBackground overflow-scroll scrollbar-none">
      {/* Header Component */}
      <Header />

      {/* Main Content - Home */}
      <main>
        <Outlet />
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 p-3 transition-transform duration-300 ease-in-out rounded-full shadow-2xl transform ${
          theme === "white"
            ? "bg-slate-700 text-white hover:bg-slate-800 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600"
            : "bg-slate-200 text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
        } z-50 focus:outline-none`}
      >
        {theme === "white" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
    </div>
  );
}

export default App;
