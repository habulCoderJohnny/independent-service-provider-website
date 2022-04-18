import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home/Home';
import Galleries from './Pages/Galleries/Galleries';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import Tutorial from './Pages/Tutorials/Tutorial';
import About from './Pages/About/About';
import Workshop from './Pages/Workshop/Workshop';
import Blog from './Pages/Blogs/Blog';
import PhotoDetail from './Pages/PhotoDetail/PhotoDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/night-photography' element={<Galleries/>}></Route>
        <Route path='/night-photography/:photoDetail' element={<PhotoDetail/>}></Route>
        <Route path='/workshop' element={<Workshop/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
