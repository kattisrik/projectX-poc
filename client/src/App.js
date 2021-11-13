import Invitaion from "./Invitaion/Invitation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/website/:userName" element={<Invitaion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
