import './App.css';
import Products from './components/Products';

const App = () => {
  const products = [
    {
      id: "p1",
      title: "nirma",
      amount: 100,
      date: new Date(2022, 10, 2),
    },
    {
      id: "p2",
      title: "sirexcel",
      amount: 140,
      date: new Date(2013, 1, 15),
    },
    {
      id: "p3",
      title: "tide",
      amount: 120,
      date: new Date(1902, 0, 20),
    },
    {
      id: "p4", 
      title: "maggii",
      amount: 130,
      date: new Date(1976, 11, 11),
    }
  ];

  return ( 
    <div>
      <Products items={products} />
    </div>
  );
};

export default App;
