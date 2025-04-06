import './App.css';
import Item from './components/Item.js'; 
import ItemDate from './components/ItemDate.js';

function App() {
  const itemnamechanges="SIrxcel";
  return ( 
   <div>
    <Item name ='nirma'></Item> 
    <ItemDate day='5' month='jan' year='1976' ></ItemDate>

    <Item name={itemnamechanges}></Item> 
    <ItemDate day='6' month='jan' year='1977' ></ItemDate>

    <Item name='tide'></Item> 
    <ItemDate day='7' month='jan' year='1978'></ItemDate>
     <div className="App">Hello World..!</div>
   </div>
  );
}

export default App;
