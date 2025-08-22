import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

export const ReduxCpt = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const incrementBy10 = () => {
    dispatch(incrementByAmount(10));
  };

  return (
    <>
      <h1>Compteur Redux</h1>
      <p>Compteur redux : {count}</p>

      <button onClick={incrementCount} className="btn">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="btn">
        -
      </button>
      <button className="btn" onClick={incrementBy10}>
        + 10
      </button>
    </>
  );
};
