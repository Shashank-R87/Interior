import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/*" element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
