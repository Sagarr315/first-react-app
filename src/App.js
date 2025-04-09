import './App.css';

import Products from './components/Products';

   
   const App = () =>{
    const Products = [
      {
        id:"p1",
        title:"nirma",
        amount:100,
        Date:new Date(2022,10,2),
      },
      {
        id:"p2",
        title:"sirexcel",
        amount:140,
        Date:new Date(2022,10,2),
      },
      {
        id:"p3",
        title:"tide",
        amount:120,
        Date:new Date(2022,10,2),
      },
      {
        id:"p3",
        title:"maggii",
        amount:130,
        Date:new Date(2022,10,2),
      }
    ]
   

  return ( 
   <div>
    <Products items={products}></Products>
   </div>
   
  );
}

export default App;
