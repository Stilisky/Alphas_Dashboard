import './App.css';
import Landing from './components/landing';
import AdminHome from './admin/page/AdminHome';
import { Route, Routes } from 'react-router-dom';
import { UserDashboard } from './components/userdashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/AdminHome' element={<AdminHome />}/>
      <Route path='/dashboard' element={<UserDashboard />}/>
    </Routes>
  );
}

export default App;
