// console.log('hello world redux', Redux);
// console.log(ReduxThunk);
console.log(store);

store.subscribe(() => {
    document.querySelector("#mobile-store").innerHTML = store.getState().mobile;
})


document.querySelector("#buy-mobile").addEventListener('click', () => {
    store.dispatch(buyMobile(1));    
    console.log(store.getState());
})


// console.log(store);

// store.dispatch(buyMobile(10));
// store.dispatch(refundMobile());

// store.dispatch(buyLaptop());
// store.dispatch(buyProducts());

// console.log(store.getState());



