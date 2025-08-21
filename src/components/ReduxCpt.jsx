import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export const ReduxCpt = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Compteur Redux</h1>
      <p>Compteur : {count}</p>
      <button onClick={incrementCount} className="btn">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="btn">
        -
      </button>
    </>
  );
};
