import "./App.css";
import Footer from "./customer/components/footer/Footer";
import Header from "./customer/components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="w-full h-full max-h-screen min-h-screen bg-gray-100 overflow-scroll scrollbar-none">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
