import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todos from './pages/Todos';

const Home = () => <div style={{padding: '20px'}}>This is Home Page</div>;
const AboutUs = () => <div style={{padding: '20px'}}>This is About Us Page</div>;
const NotFound = () => <div style={{padding: '20px'}}>404 - Page Not Found</div>;

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays visible across all pages */}
      <Navbar /> 
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />
        {/* 404 - Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
