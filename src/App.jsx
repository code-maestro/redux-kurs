import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const adding = () => {
    dispatch(actions.increment());
  };

  const subtracting = () => {
    dispatch(actions.decrement());
  };

  const addingBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>count is: {counter}</p>

        <button type="button" onClick={adding}> + </button>

        <button type="button" onClick={subtracting}> - </button>

        <button type="button" onClick={addingBy}> ++ </button>
      </header>
    </div>
  );
}

export default App;
