import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from "./error-page";
import Contact from './routes/contact';
import Project from './routes/projects';
import Home from './routes/home';
import Shop from './components/shop/Shop';
import Product from './components/shop/Product';
import Dispenser from './components/dispenser/dispenser';

function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <div className="bg-dark" style={{ minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dispenser' element={<Dispenser />} />
            <Route path='/shop' >
              <Route index element={<Shop />} />
              <Route path='*' element={<Product />} >
                <Route path=':id' />
                <Route path='*' element={<ErrorPage />} />
              </Route>
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </div>


    </>

  );
}

export default App;
