import React from 'react';
import { connect } from 'react-redux';
import incrementAction from '../actions/incrementAction';
import decrementAction from '../actions/decrementAction';
// import { useSelector } from 'react-redux';

// const Demo = () => {
//     const counter = useSelector(state => state.counter);

//     return (
//         <div>
//             <h1>{counter}</h1>
//         </div>
//     );
// }

const Demo = ({ counter, dispatch }) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
    </div>
)

const mapCounterToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapCounterToProps)(Demo);
