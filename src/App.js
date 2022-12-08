import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import Home from './components/home/home';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <>
//       {/* This is the alias of BrowserRouter i.e. Router */}
//       <Router>
//         <Routes>
//           {/* This route is for home component
//           with exact path "/", in component props
//           we passes the imported component */}
//           <Route exact path="/" component={Home} />

//           {/* This route is for about component
//           with exact path "/about", in component
//           props we passes the imported component */}
//           <Route path="/menu" component={Menu} />

//           {/* If any route mismatches the upper
//           route endpoints then, redirect triggers
//           and redirects app to home component with to="/" */}
//           {/* <Redirect to="/" /> */}
//         </Routes>
//       </Router>
//     </>
//   );
// }
export default App;
