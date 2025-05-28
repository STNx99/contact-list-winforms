import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label>Danh Sach lien he</label>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Them lien he
      </button>
    </div>
  );
}

export default App;
