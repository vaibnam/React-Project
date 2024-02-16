import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
