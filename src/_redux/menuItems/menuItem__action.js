export const constants = {
    SET__ACTIVE:'SET__ACTIVE'
}

export const setActive=(id)=>{
    return({
        type:constants.SET__ACTIVE,
        payload:{
            id:id
        }
    })
}
