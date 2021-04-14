/**
 * deep copies multi dimensional arrays without reference
 * @param {object[]} array
 * @returns object[]
 */
const copy = (array) => JSON.parse(JSON.stringify(array));
export default copy;
