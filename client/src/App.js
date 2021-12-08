import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./pages/Chart";
import Product from "./pages/Product";
import Router from "./pages/Router";
import Container from "@mui/material/Container";

function App() {
  return (
    <BrowserRouter>
      <Container className="App">
        <Router />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
