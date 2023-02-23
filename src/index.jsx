import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Inicio from "./views/Inicio";
import Contatos from "./views/Contatos";
import NoPage from "./views/NoPage";
import Instagram from "./views/Instagram";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Inicio />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="*" element={<NoPage />} />
          <Route path="instagram" element={<Instagram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);