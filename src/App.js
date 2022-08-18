import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
