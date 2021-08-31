import React from 'react'; 
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <div onClick={dec} className="btn btn-primary">DEC</div>
            <div onClick={inc} className="btn btn-primary">INC</div>
            <div onClick={rnd} className="btn btn-primary">RND</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
    return {
        inc, 
        dec,
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            rnd(value)
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);