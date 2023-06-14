import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './login/Login';
import ProductDetail from './DetailProject/ProductDetail';
import Home from './Home';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/login' exact element={<Login></Login>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path="/clothes/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
