import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Header from "./components/Header";
import Home from './components/Home';
import Project from './components/Project';



function App() {
  return (
    <>
      <Header />
      <Home />
      <Project />
      <Experiance />
      <Contact/>
      <Toaster/>
    </>
  );
}

export default App;
