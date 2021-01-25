
import './App.css';
import Providers from './Providers';
import Breadcrumb from "./Breadcrumb";
import Image from "./Image";
import Footer from "./Footer";



//const c = [
//  {cif: "A58818501",
//  name: "Proveedor 1",
//  address: "Sevilla",
//  cp:"20011",
//  phone: "0976543234",
//  email:"provedor1@gmail.com",
//  code: "ABC123",
//  stock_sale: "200"},
//  {cif: "A56783245",
//  name: "Proveedor 2",
//  address: "Madrid",
//  cp:"21832",
// phone: "0987635241",
//  email:"provedor2@gmail.com",
//  code: "CDE456",
//  stock_sale: "200"}
//]


function App() {
  return (
    <div className="App">
      <h1>Providers APP - Online Store</h1>
      
      <Breadcrumb/>
      <Providers/> 
      <Image/>

      <Footer/>
    </div>
  );
}

export default App;
