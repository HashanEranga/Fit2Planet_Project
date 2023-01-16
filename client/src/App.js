import './Assets/Styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Footer from './Layouts/Footer/Footer';
import Nav from './Layouts/Nav/Nav'
import Products from './Pages/Products/Products';

function App() {
  return (
    <Router>
      <Nav/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
