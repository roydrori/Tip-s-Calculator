import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return(
  <BrowserRouter>
  <div className="d-flex flex-column side-allpage">
    <Container className="mt-3">
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
      </Routes> 
    </Container>
  </div>
  </BrowserRouter>
  )
}

export default App;
