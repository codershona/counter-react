import * as actionTypes from '../actions/actionTypes';



const initialState = {
	counter: 0
	// counter: 0,
	// results: []
};


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
    	case actionTypes.INCREMENT: 
          const newState = Object.assign({}, state);
          newState.counter = state.counter + 1;

          return newState;

  //   	return {
		// 	counter: state.counter + 1
		// }

		case actionTypes.DECREMENT:

		return {
			...state,

			counter: state.counter - 1
		}

		case actionTypes.ADD:
		return {
			...state,

			counter: state.counter + action.val

		}

		case actionTypes.SUBTRACT:
		return {
			...state,

			 counter: state.counter - action.val
		}

		// case actionTypes.STORE_RESULT:
		// return {
		// 	...state,

		// 	results: state.results.concat({id: new Date(), value: state.counter})

		// 	// results: state.results.push()
		// }

		// case actionTypes.DELETE_RESULT:

		// // const id = 2;
		// // const newArray = [...state.results];

		// // // state.results.splice(id, 1)
		// // newArray.results.splice(id, 1)

		// // const updatedArray = state.results.filter((result, index) => index !== id);
		// const updatedArray = state.results.filter(result => result.id !== action.resultElId);

		//   return {
		//   	...state,
  //            // results: newArray
  //            results: updatedArray
		//   }




    }


    	return state;

};

export default reducer;



	// if (action.type === 'INCREMENT') {
	// 	return {
	// 		counter: state.counter + 1
	// 	}
	// }

	// if (action.type === 'DECREMENT') {
	// 	return {
	// 		counter: state.counter - 1
	// 	}
	// }


	// if (action.type === 'ADD') {
	// 	return {
	// 		// counter: state.counter + 10
	// 		// counter: state.counter + 11
	// 		counter: state.counter + action.val

	// 	}
	// }

	// if (action.type === 'SUBTRACT') {
	// 	return {
	// 		// counter: state.counter - 8
	// 		 // counter: state.counter - 9
	// 		 counter: state.counter - action.val
	// 	}
	// }

    // DECREMENT
    // ADD
    // SUBTRACT




// 	return state;

// };

// export default reducer;