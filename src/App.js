import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home/Home';
import Galleries from './Pages/Galleries/Galleries';
import Header from './Pages/Share/Header/Header';
import Tutorial from './Pages/Tutorials/Tutorial';
import About from './Pages/About/About';
import Workshop from './Pages/Workshop/Workshop';
import Blog from './Pages/Blogs/Blog';
import PhotoDetail from './Pages/PhotoDetail/PhotoDetail';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrintImg from './Pages/PhotoDetail/PrintImg/PrintImg';
import ProtectedPage from './Pages/Login/ProtectedPage/ProtectedPage';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/night-photography' element={<Galleries/>}></Route>
        <Route path='/night-photography/:photoDetail' element={<PhotoDetail/>}></Route>
        <Route path='/checkout' element={<ProtectedPage><PrintImg/></ProtectedPage>}></Route>
        <Route path='/workshop' element={<Workshop/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
