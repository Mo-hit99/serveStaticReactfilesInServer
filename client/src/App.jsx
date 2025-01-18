import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import  NavBar  from "./components/NavBar";
function App() {
  return (
    <section>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </section>
  );
}

export default App;
