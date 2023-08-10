import { visibilityActions } from './visibilityCart';
import { cartActions } from './cartReducer';


export const getCartData = () => {
    return async (dispatch) => {
        dispatch(visibilityActions.showNotification({
            status: 'Pending',
            title: 'Sending',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            try {
                const response = await fetch('https://shopingcartredux-default-rtdb.firebaseio.com/cart.json')
                if (response.ok) {
                    const data = await response.json();
                    dispatch(cartActions.replaceCart(data))
                    dispatch(visibilityActions.showNotification({
                        status: 'success',
                        title: 'Success',
                        message: ' cart data Send Succesfully!'
                    }))

                }
                else {
                    const data = await response.json();
                    let errorMessage = 'fetching fails!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
            }
            catch (error) {
                dispatch(visibilityActions.showNotification({
                    status: 'error',
                    title: 'Fail',
                    message: ' cart data Send Fails!'
                }))
            }
        }
        sendRequest()
    }
}




export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(visibilityActions.showNotification({
            status: 'Pending',
            title: 'Sending',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            try {
                const response = await fetch('https://shopingcartredux-default-rtdb.firebaseio.com/cart.json', {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

                if (response.ok) {
                    dispatch(visibilityActions.showNotification({
                        status: 'success',
                        title: 'Success',
                        message: ' cart data Send Succesfully!'
                    }))

                }
                else {
                    const data = await response.json();
                    let errorMessage = 'fetching fails!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
            }
            catch (error) {
                dispatch(visibilityActions.showNotification({
                    status: 'error',
                    title: 'Fail',
                    message: ' cart data Send Fails!'
                }))
            }
        }
        sendRequest()
    }
}