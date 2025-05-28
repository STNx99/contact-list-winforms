import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddContactForm from "./AddContactForm";

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
      {show && <AddContactForm />}
    </div>
  );
}

export default App;
