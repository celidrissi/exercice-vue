export function deleteDishe (state, id) {
    state.dishes = state.dishes.filter(dishe => dishe.id !== id);
}

export function updateDishe (state, dishe) {
    state.dishes = state.dishes.map(d => {
        if (d.id === dishe.id) {
            return dishe;
        }
        return d;
    });
}

export function addDishe (state, dishe) {
    dishe.id = state.dishes.length + 1;
    state.dishes.push(dishe);
}

export function setStateFromLocalStorage (state) {
    const dishes = JSON.parse(localStorage.getItem('dishes'));
    if (dishes) {
        state.dishes = dishes;
    }
}


