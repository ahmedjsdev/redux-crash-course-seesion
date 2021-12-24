
// Create Actions Creator
function buyMobile(amount) {
    return {
        type: BUY_MOBILE,
        payload: amount
    }
} 

function refundMobile() {
    return {
        type: REFUND_MOBILE,
    }
}

function buyLaptop() {
    return {
        type: BUY_LAPTOP
    }
}

function buyProducts() {
    return async (dispatch, getState) => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch({
                type: BUY_PRODUCT,
                payload: data
            })
        } catch(err) {
            console.log(err);
        }
        
    }
}
