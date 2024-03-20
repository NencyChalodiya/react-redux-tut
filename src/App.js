import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" exact element={<ProductListing/>}/>
        <Route path="/product/:productId" exact  element={<ProductDetails/>}/>
        <Route>404 not found</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
