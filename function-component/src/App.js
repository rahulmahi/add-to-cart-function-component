
import { Api } from './API/api';
import './App.css';
import Fun from './reactRouter/input_form';
import { BrowserRouter,Route,Routes,routes, } from 'react-router-dom';
import Profile from './reactRouter/profile';
import About from './reactRouter/third';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fun />} />
        <Route path='profile' element={<Profile />} />
        <Route path='about'  element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
