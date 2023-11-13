import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Header, { HeaderPhone } from "./components/Header";
import Home from './components/Home';
import Project from './components/Project';
import Footer from "./components/Footer";
import { useState } from "react";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Project />
      <Experiance />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
