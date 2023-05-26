import { Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing';
import Signup from './pages/sign up/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    
  );
}


export default App;