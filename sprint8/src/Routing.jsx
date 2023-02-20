import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Starships } from "./components/Starships";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const Routing = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} /> 
        <Route path="/Starships/" element={<Starships />} />
        <Route path="/Welcome/" element={<Welcome />} /> 
        <Route path="/Register/" element={<Register />} />
        <Route path="/Login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
  
  