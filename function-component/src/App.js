
import { Api } from './API/api';
import './App.css';
import Fun from './reactRouter/input_form';
import { BrowserRouter,Route,Routes,routes, } from 'react-router-dom';
import Profile from './reactRouter/profile';
import About from './reactRouter/third';
import ParamComponet from './param_and_queryparam/param';
import Deatil from './param_and_queryparam/Deatil';


function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fun />} />
        <Route path='profile' element={<Profile />} />
        <Route path='about'  element={<About />} />
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='/' element = {<ParamComponet />} /> */}
        {/* <Route path='detail/:id' element = {<Deatil />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      
      <Interview />
      
    </div>
  );
}

export default App;
