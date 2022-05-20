const arrayMove = (arr, old_index, new_index) =>{
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    console.log(arr);
    return arr; // for testing
}
const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUser':
            return [...state,{
                id: (state.length === 0) ? 0 : state[state.length-1].id + 1,
                nameUser: action.nameUser
            }];
        case 'removeUser':
            return state.filter((user) => user.id !== action.id);
        case 'upUser':
            return [...arrayMove(state, action.index, action.index - 1)]
        case 'downUser':
            return [...arrayMove(state, action.index, action.index + 1)]
        default:
            return state;
    }
}
export default userReducer;