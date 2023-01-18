import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Landing from "./components/pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;
