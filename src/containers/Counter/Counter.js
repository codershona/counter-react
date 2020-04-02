import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions';
// import { increment } from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
    <CounterOutput value={this.props.ctr} />
    <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
    <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
    <CounterControl label="Add 12" clicked={this.props.onAddCounter}   />
    <CounterControl label="Subtract 16" clicked={this.props.onSubtractCounter} />
     
     <hr />

     <button onClick={() => this.props.onStoreResult(this.props.ctr)}>STORE RESULT</button>

      <ul>
      {this.props.storedResults.map(strResult => (
                <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>

        ))}

     
      </ul>      

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
       ctr: state.ctr.counter,
       storedResults: state.res.results

    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(12)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(16)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))



    };
};





export default connect(mapStateToProps, mapDispatchToProps)(Counter);