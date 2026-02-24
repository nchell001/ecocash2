import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apply from './pages/Apply.tsx';
import Admin from './pages/Admin.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apply />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
