export const getCart = () => {
    return new Promise((resolve, reject) => {
        const cart = window.localStorage.getItem('cart');
        resolve(cart);
    })
}

export const storeCart = (cart) => {
    // we can store string and cart is an object so need to use JSON.stringify
    window.localStorage.setItem('cart', JSON.stringify(cart));
}