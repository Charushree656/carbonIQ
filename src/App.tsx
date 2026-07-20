import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Dashboard from "./pages/Dashboard";
import Api from "./pages/Api";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="demo" element={<Demo />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="api" element={<Api />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
