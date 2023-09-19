import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Rails APIからデータをフェッチ
    fetch('http://127.0.0.1:3001/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data && <div>{data.message}</div>}
      </header>
    </div>
  );
}

export default App;
