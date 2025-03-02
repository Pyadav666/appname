import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
