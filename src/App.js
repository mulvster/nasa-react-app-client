import React from 'react';
import './App.css';
import logo from "./logo.svg";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      let finalData = data.message.date;
      setData(finalData)
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading....." : data}</p>
      </header>
    </div>
  );
}

export default App;
