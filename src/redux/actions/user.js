export const addUser = (nameUser)=>{
    return {
        type: 'addUser',
        nameUser
    }
}
export const removeUser = (id)=>{
    return {
        type: 'removeUser',
        id
    }
}
export const upUser = (index) =>{
    return {
        type: 'upUser',
        index
    }
}
export const downUser = (index) =>{
    return {
        type: 'downUser',
        index
    }
}