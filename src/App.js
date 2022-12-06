import Navbar from './Navbar';
import Resources from './pages/Resources';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Mentorship from './pages/Mentorship';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} />
          <Route path='/mentorship' element={<Mentorship />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
