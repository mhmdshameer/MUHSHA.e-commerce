import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state)=>state.user.currentUser);
    console.log(user);
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/Products/:category" element={<ProductList />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={ user ?  <Navigate to="/" />: <Login/> }/>
        <Route path="/register" element={user ?  <Navigate to="/" />: <Register/>} />
        <Route path="/success" element={<Success />} />

      </Routes>     
    </Router>
  );
};

export default App;
