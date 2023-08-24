import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <div className="bg-primary-subtle text-black" style={{minHeight : '100vh'}}>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default App;
