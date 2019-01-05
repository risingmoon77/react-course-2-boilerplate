import {createStore} from 'redux';



const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decerementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return{
            count: state.count + action.incrementBy
        };
         case 'DECREMENT':
        return{
          count: state.count - action.decrementBy
      };
      case 'RESET':
        return{
          count: 0
      };
      case 'SET':
      return{
        count: action.count
    };
        default:
         return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decerementCount());

store.dispatch(decerementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
    
    
    


