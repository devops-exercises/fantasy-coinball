export const REQUEST_COINNETWORKS = "REQUEST_COINNETWORKS";
export const RECEIVE_COINNETWORKS = "RECEIVE_COINNETWORKS";
export const DEVELOPER_BEGIN_DRAG = "DEVELOPER_BEGIN_DRAG";
export const DEVELOPER_ASSIGN = "DEVELOPER_ASSIGN";

function requestCoinNetworks() { 
    return { type: REQUEST_COINNETWORKS };
}
function receiveCoinNetworks(json) {
    return {
        type: RECEIVE_COINNETWORKS, coinNetworks: json, receivedAt: Date.now()
    };
}
export function fetchCoinNetworks() {
    return dispatch => {
        dispatch(requestCoinNetworks());
        return fetch('http://localhost:8080/api/networks/')
            .then((response) => {console.log("Received", response); return response.json();})
            .then((json) => {console.log("Result", json); return dispatch(receiveCoinNetworks(json))});
    }
}

export function developerBeginDrag(name) {
    return {
        type: DEVELOPER_BEGIN_DRAG, name: name
    };
}

export function developerAssign(name, position) {
    return {
        type: DEVELOPER_ASSIGN, name: name, position: position
    };
}