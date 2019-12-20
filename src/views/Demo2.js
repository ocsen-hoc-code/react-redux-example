import React from 'react';
import { connect } from 'react-redux';

const Demo2 = ({ counter, dispatch }) => (
    <div>
        <h1> Counter: {counter}</h1>
    </div>
)

const mapCounterToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapCounterToProps)(Demo2);
