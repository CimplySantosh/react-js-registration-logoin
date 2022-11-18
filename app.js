import Products from "./component/products";
import "./app.css";
import {Routes,Route} from "react-router-dom"
import Loginfrom from "./component/loginfrom";

function App() {
  return (
    <div className="b-container"> 
    <div className="row">
        <div className="col-lg-8 mx-auto m-4">
        <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/loginfrom" element={<Loginfrom/>} />
      </Routes>
   
      </div>
      </div>
      
    </div>
  );
}

export default App;
