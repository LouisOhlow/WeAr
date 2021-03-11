/**
 * @returns {string} the current date like fe. 20201130-146559300
 */
export default function curDateTime() {
  const date = new Date();
  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
}
