/**
 * Returns the type or parent object of passed argument.
 * @param {*} arg - Any value
 * @returns {string} Description of the passed value type or object type
 */
const isType = arg => {
  const t = typeof(arg); // Get argument type
  if (arg === null) {
    return 'null'
  } else if (t === 'object') {
    const i = arg.constructor;
    if (typeof(i) === 'function') {
      return i.name
    }
  } else {
    return t
  }
}


// // Six data types that are primitives:
// // Undefined
// // Symbol (new in ECMAScript 6)
// const testArray = [
//   { argument: 1,            output: 'number'  },
//   { argument: '1',          output: 'string'  },
//   { argument: true,         output: 'boolean' },
//   { argument: null,         output: 'null' },
//   { argument: new Date(),   output: 'Date'    },
//   { argument: {a: 1, b: 2}, output: 'Object'  },
//   { argument: [1, 2],       output: 'Array'   }
// ]
// testArray.map( (test, i) => {
//   if (test.output === isType(test.argument)) {
//     console.log('Test ' + i + ": OK");
//   } else {
//     console.log('Test' + i + ': failed!');
//   }
// });

module.exports = {
  isType: isType
};