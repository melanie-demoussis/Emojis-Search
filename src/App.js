import "./App.css";
import data from "./assets/data.json";
import { useState } from "react";

//import components
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const tab = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].keywords.indexOf(search) !== -1) {
      if (tab.length < 20) {
        tab.push(
          <Line
            key={data[i].title}
            title={data[i].title}
            emoji={data[i].symbol}
          />
        );
      } else {
        break;
      }
    }
  }

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {tab}
      <Footer />
    </div>
  );
}

export default App;
