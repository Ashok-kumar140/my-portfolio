import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Header from "./components/Header";
import Home from './components/Home';
import Project from './components/Project';
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Header />
      <Home />
      <Project />
      <Experiance />
      <Contact/>
      <Toaster/>
      <Footer/>
    </>
  );
}

export default App;
