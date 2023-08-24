import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from "./error-page";
import Contact from './routes/contact';
import Project from './routes/projects';
import Home from './routes/home';
import Shop from './components/shop/shop';
import Product from './components/shop/product';

function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <div className="bg-primary-subtle text-black" style={{ minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/shop' >
              <Route index element={<Shop />} />
              <Route>
                <Route path=':id' element={<Product />} />
              </Route>
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </div>


    </>

  );
}

export default App;
