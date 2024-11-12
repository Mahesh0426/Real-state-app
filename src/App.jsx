import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
