import { useSelector } from "react-redux";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const authState = useSelector((state) => state.auth.isLoggedIn);
  console.log(authState);
  return (
    <div className="App">
        { !authState && <Login/>}
        { authState && <Home/>}
    </div> 
  );
}

export default App;
