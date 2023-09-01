import './App.css';
import Landing from './components/landing';
import AdminHome from './admin/page/AdminHome';
import { Route, Routes } from 'react-router-dom';
import { UserDashboard } from './components/userdashboard';
import Login from './components/Login';
import Register from './components/Register';
import Edithuser from './admin/page/Edithuser';
import ServInterface from './components/serviceinterface';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/AdminHome' element={<AdminHome />}/>
      <Route path='/dashboard' element={<UserDashboard />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/update-user/:id' element={<Edithuser />} /> {/* Nouvelle route pour la mise à jour */}
      <Route path='/setting' element={<ServInterface />}/>

    </Routes>
  );
}

export default App;
