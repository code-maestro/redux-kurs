import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INC'});
  };

  const decrement = () => {
    dispatch({type: 'DEC'});
  };

  const addition = () => {
    dispatch({type: 'ADD', payload: 10});
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {counter}
          </button>
        </p> */}

        <p>count is: {counter}</p>

        <button type="button" onClick={increment}>
          +
        </button>

        <button type="button" onClick={decrement}>
          -
        </button>

        <button type="button" onClick={addition}>
          -
        </button>

      </header>
    </div>
  );
}

export default App;
