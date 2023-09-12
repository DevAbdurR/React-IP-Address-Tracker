import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="mainHeading">IP Address Tracker</h1>
        <div className="searchContainer">
          <input type="text" className="searchBar" />
          <button type="submit" className="searchBtn">
            &gt;
          </button>
        </div>
      </div>
      <div className="mapContainer">
        <Map />
      </div>
    </div>
  );
}

export default App;
