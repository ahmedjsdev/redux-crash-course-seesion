// Reducer
const mobileReducer = (state = 100, action) => {
    switch(action.type) {
        case BUY_MOBILE:
            return state - action.payload;
        case REFUND_MOBILE:
            return state + 1;
        default:
            return state;
    }
}

const laptopReducer = (state = 50, action) => {
    switch(action.type) {
        case BUY_LAPTOP:
            return state - 1;
        default:
            return state;
    }
}

const productsReducer = (state = [], action) => {
    switch(action.type) {
        case BUY_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}