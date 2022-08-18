import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
