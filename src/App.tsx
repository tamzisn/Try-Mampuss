import Container from "./components/Container";
import "./index.css";
import Administrator from "./pages/Administrator";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./pages/Log";
import Trigger from "./pages/Trigger";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import NestedList from "./pages/try-list";
import { Stack } from "@mui/material";
import HookForm from "./pages/try-hookform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/administrator" element={<Administrator />} />
                <Route path="/log" element={<Log />} />
                <Route path="/trigger" element={<Trigger />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </Container>
          }
        />
      </Routes>
    </Router>
    // <HookForm />
  );
}

export default App;
