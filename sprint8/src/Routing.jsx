import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Welcome } from "./Welcome";
import { Starships } from "./Starships";

export const Routing = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} /> 
        <Route path="/Starships/" element={<Starships />} />
        <Route path="/Welcome/" element={<Welcome />} /> 
      </Routes>
    </BrowserRouter>
  );
  