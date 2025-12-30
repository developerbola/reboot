import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-15">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
