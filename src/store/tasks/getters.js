export function getDishes (state) {
    return state.dishes;
}

export function getDishByID (state) {
    return (id) => { return state.dishes.find(dishe => dishe.id === id) }
}