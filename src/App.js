
import './App.css';
import Provider from './Provider';

const c = 
  {cif: "A58818501",
  name: "Proveedor 1",
  address: "Sevilla",
  cp:"20011",
  phone: "0976543234",
  email:"provedor1@gmail.com",
  code: "ABC123",
  stock_sale: "200"}






function App() {
  return (
    <div className="App">
      <h1>Providers APP - Online Store</h1>
      <Provider provider={c}/> 
    </div>
  );
}

export default App;
