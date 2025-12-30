import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import VPS from "./pages/VPS";
import Domains from "./pages/Domains";
import About from "./pages/About";
import Status from "./pages/Status";
import Blog from "./pages/Blog";
import Network from "./pages/Network";
import { Terms, Privacy, SLA } from "./pages/Legal";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Pages WITH Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/vps" element={<VPS />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/network" element={<Network />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sla" element={<SLA />} />
        </Route>

        {/* Pages WITHOUT Navbar & Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
