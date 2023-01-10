import * as React from 'react';
import './App.css';
import { CreateData } from './components/CreateData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ReadData } from './components/ReadData';
import { Presentacion } from './components/Presentacion';
import { Copy } from './components/Copy';
const App = () => {

  return (


    <Router>
      <NavBar>

      </NavBar>
      <div className='contenedor'>
        <Routes>
          <Route path="/create" element={<CreateData />}></Route>
          <Route path="/read_data" element={<ReadData />}></Route>
          <Route path="/" element={<Presentacion />}></Route>
        </Routes>
      </div>

      <Copy>

      </Copy>


    </Router>



  );
}

export default App;
