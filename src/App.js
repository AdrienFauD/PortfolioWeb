import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App" class="container-fluid p-0 m-0">
      <div class="bg-success text-white vh-100">
        <Navbar></Navbar>
      </div>
      <p>Bottom block</p>
    </div>
  );
}

export default App;
