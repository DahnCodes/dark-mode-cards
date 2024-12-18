import "./App.css";
import Card from "./components/Card";
import Toggle from "./components/Toggle";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="head-text">
        <h1>Explore Our Essential Features for Effective Data Management</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="card-section">
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Toggle/>
    </>
  );
}

export default App;
