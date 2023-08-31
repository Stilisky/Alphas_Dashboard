import './App.css';
import Landing from './components/landing';
import AdminHome from './admin/page/AdminHome';
import { Route, Routes } from 'react-router-dom';
import { UserDashboard } from './components/userdashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/AdminHome' element={<AdminHome />}/>
      <Route path='/dashboard' element={<UserDashboard />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default App;
