const rootReducer = Redux.combineReducers({
    mobile: mobileReducer,
    laptop: laptopReducer,
    products: productsReducer
})


const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk));
