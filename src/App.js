import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import BreakOut from './games/BreakOutGame';

function App() {
  return (
    <>
    <div className='App'>
    <NavLink to="/game1"> Brekoutgame</NavLink>
    </div>
    <Routes>
    <Route path='/' element={<BreakOut/>}></Route>
      <Route path='/game1' element={<BreakOut/>}></Route>
    </Routes>
    </>
  );
}

export default App;
