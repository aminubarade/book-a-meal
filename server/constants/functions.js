// a function to generate Id from resource  list
const generateId = (array) => {
    array = [];
    let length = array.length;
    let lastId = length != 0 ? array[length - 1].id : 0;
    return ++lastId;
};
export default generateId;
