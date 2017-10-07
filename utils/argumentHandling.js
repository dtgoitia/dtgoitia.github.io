/**
 * Returns the type or parent object of passed argument.
 * @param {*} arg - Any value
 * @returns {string} Description of the passed value type or object type
 */
const isType = arg => {
  const t = typeof(arg); // Get argument type
  if (arg === null) {
    return 'null';
  } else if (t === 'object') {
    const i = arg.constructor;
    if (typeof(i) === 'function') {
      return i.name;
    }
  } else {
    return t;
  }
};

module.exports = {
  isType
};