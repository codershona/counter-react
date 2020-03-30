import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

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

     <button onClick={this.props.onStoreResult}>Store Result</button>

      <ul>
      {this.props.storedResults.map(strResult => (
                <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>

        ))}

     
      </ul>      

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
       ctr: state.counter,
       storedResults: state.results

    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 12}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 16}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})



    };
};





export default connect(mapStateToProps, mapDispatchToProps)(Counter);