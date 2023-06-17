import { useState } from "react";
import "./App.css";
import UserDetail from "./components/UserDetail";
import UsersList from "./components/UsersList";

function App() {
  const [activeUserId, setActiveUserId] = useState("");
  return (
    <div className="App">
      <div>
        <UsersList setActiveUserId={setActiveUserId} />
      </div>
      <div>
        <UserDetail activeUserId={activeUserId} />
      </div>
    </div>
  );
}

export default App;
