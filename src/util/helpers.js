export const formatDesc = (desc, limit) => {
    return (desc.length > limit) ? desc.slice(0, limit - 1).concat('...') : desc;
}

export const initialToggleState = (arrOfObjects) => {
    let returnObj = {};
    const ids = arrOfObjects.map(e => e.id);
    arrOfObjects.forEach((e) => {
        returnObj[e.id] = {
            name: e.name,
            chosen : e.chosen
        }
    })
    return returnObj;
}

export const turnIntoArray = (object) => {
    
}
