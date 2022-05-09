export function deleteDishe (context, data) {
    context.commit('deleteDishe', data.id);
} 

export function updateDishe (context, value) {
    context.commit('updateDishe', value);
}

export function addDishe (context, value) {
    context.commit('addDishe', value);
}