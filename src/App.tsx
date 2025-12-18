import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:slug" element={<Course />} />
      </Routes>
    </>
  );
};

export default App;
