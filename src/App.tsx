import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Routes>
      {/* Pages WITH Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      {/* Pages WITHOUT Navbar & Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
