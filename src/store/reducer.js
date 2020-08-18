export const initialState = {
    cart: [],
    user: null,
    username:"",
    email:"",
    password:"",
};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'CREATE_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            //Logic
            return { 
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'REMOVE_FROM_CART':
            //Logic

            //Clone the basket
            let newCart = [...state.cart];

            //Looking for the index of the item to be removed. Act
            const index = state.cart.findIndex(cartItem => cartItem.id === action.id)

            //If the item exists, execute splice and remove the item
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id})`
                );
            }

            //Return new cart, which should be the one without the removed item.
            return { ...state, cart: newCart }
        default:
            return state;
    }
}