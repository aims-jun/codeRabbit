import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      setMessage(event.data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const openNewWindow = () => {
    const windowFeatures = "width=600,height=400,left=200,top=200";
    window.open("/new-window", "childForm", windowFeatures);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={openNewWindow}>새 창 열기</button>
        {message && (
          <div>
            <h3>받은 데이터:</h3>
            <p>이름: {message.name}</p>
            <p>이메일: {message.email}</p>
            <p>메시지: {message.message}</p>
          </div>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
