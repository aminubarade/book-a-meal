// a function to generate Id from resource  list
export default function generateId(array=[]) {
    let length = array.length;
    let lastId = length != 0 ? array[length - 1].id : 0;
    return ++lastId;
};