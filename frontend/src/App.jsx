import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 添加其他前端路由... */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
