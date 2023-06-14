import data from './pricesList';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  document.title = "Prices"
  return (
    <div className="App">
      {data.map((data, index) => (
              <Card
                key={index}
                name={data.name}
                price={data.price}
                speed={data.speed}
                selected={data.selected}
                color={data.color}
              />
            ))}
    </div>
  );
}

export default App;
