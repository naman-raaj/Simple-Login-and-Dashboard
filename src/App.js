 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
 

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={ <Login/>}> </Route>
      <Route path='/homepage' element={<HomePage/>}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
