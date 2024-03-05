import { useState, useEffect } from "react";
import "./App.css";
import User from "./User.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [value, setVal] = useState(0);
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((u) => setUsers(u));
  }, []);
  function addUser() {
    setVal(value + 1);
  }
  return (
    <div className="App">
      <h1 className="text-center text-danger">USERS</h1>
      <h2 className="text-center val">User Count: {value}</h2>
      <div className="container">
        {users.map((e) => (
          <User u={e} add={addUser} />
        ))}
      </div>
    </div>
  );
}

export default App;
