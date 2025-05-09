import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import CategoriePage from "./pages/CategoriePage";
import Home from "../src/pages/Home";
import AlimPage from "../src/pages/AlimentationPage";
import BatPage from "../src/pages/BatimentPage";
import FabPage from "../src/pages/Fabricationpage";
import ServPage from "../src/pages/ServicesPage";
import Footer from "../src/components/Footer";
import Construction from "../src/pages/Construction";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categoriepage" element={<CategoriePage />}></Route>
        <Route path="/alimpage" element={<AlimPage />}></Route>
        <Route path="/batpage" element={<BatPage />}></Route>
        <Route path="/fabpage" element={<FabPage />}></Route>
        <Route path="/servpage" element={<ServPage />}></Route>
        <Route path="/construction" element={<Construction />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
