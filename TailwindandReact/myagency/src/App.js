import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/client" element={<Clients/>}/>
                   <Route path="/contact" element={<Contact/>}/>

             </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
