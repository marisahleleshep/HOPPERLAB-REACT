import logo from './logo.svg';
import './App.css';
import Introduction from './Introduction';
import Management from './Management';
import Content from './Content';
import Product from './Product';

function App() {
  let sum=0;
  return (
    <div >
     < Introduction/>
     <Management/>
     <Content/>
     <Product/>
     
    </div>
  );
}

export default App;
