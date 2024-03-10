import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import { SideMenuContextProvider } from "./contexts/SideMenuContext";

export default function App() {
  return (
    <>
      <SideMenuContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SideMenuContextProvider>
    </>
  );
}
