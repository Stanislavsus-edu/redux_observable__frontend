import {HashRouter, Routes, Route} from "react-router-dom";
import Services from './Components/Services';
import ServicesId from './Components/ServicesId';
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:id' element={<ServicesId />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
