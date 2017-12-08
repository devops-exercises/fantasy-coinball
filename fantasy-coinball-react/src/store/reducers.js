import * as actions from './actions';
import {combineReducers} from 'redux';

const initialCoinNetworks = [];
const initialDevelopers = [null,null,null,null];

function CoinNetworks(state = initialCoinNetworks, action) {
    if (action.type === actions.RECEIVE_COINNETWORKS) {
        return action.coinNetworks;
    }
    return state;
}

function Developers(state = initialDevelopers, action) {
    if (action.type === actions.DEVELOPER_ASSIGN) {
        let newState = [
            ...state.slice(0, action.position),
            action.name,
            ...state.slice(action.position+1)
        ];
        console.log("Changing developer assignment", newState);
        return newState;
    }
    return state;
}

const rootReducer = combineReducers({CoinNetworks, Developers});

export default rootReducer;