import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
