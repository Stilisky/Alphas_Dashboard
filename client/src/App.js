import './App.css';
import Landing from './components/landing';
import AdminHome from './admin/page/AdminHome';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/AdminHome' element={<AdminHome />}/>

    </Routes>

    
  );
}

export default App;
