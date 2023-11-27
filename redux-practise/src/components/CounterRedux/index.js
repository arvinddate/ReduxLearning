import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./reducer";

const CounterUsingRedux=()=>{
    const {count} = useSelector((state)=>state.counter);
    //const count = useSelector((state)=>state.counter.count) or anove line
    const dispatch = useDispatch();
    const handleIncrement=()=>{
        dispatch(increment());

    }
    const handleDecrement=()=>{
        dispatch(decrement()); ///we can pass vlaue as {payload}

    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            {count}
            <button onClick={handleDecrement}>-</button>
        </div>

    )
}
export default CounterUsingRedux;