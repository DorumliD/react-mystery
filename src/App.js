import { useState } from 'react';
import './App.css';
import Header from './component/Header';


function App() {

  const [value, setValue] = useState(1);  
  const [priceOfMall, setPriceOfMall] = useState(16000);

  function minus(){
    setValue(value-1);
    setPriceOfMall(priceOfMall-16000);
  }

  function plyus(){
    setValue(value+1);
    setPriceOfMall(priceOfMall+16000); 
  }

  return (
    <div className="App">
      <Header />
    </div>
  );

}

export default App;
