import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home/Home';
import Galleries from './Pages/Galleries/Galleries';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import Tutorial from './Pages/Tutorials/Tutorial';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/night-photography' element={<Galleries/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
