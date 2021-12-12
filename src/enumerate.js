/**
 * Перечисляет значения в строку, добавляя "или" перед последним.
 * Это более человеко-привычное перечисление.
 *
 * Example:
 * enumerate(['ответить', 'сдаться', 'взять подсказку']) => 'ответить, сдаться или взять подсказку'
 *
 * @param {array} arr
 * @param {string} [separator]
 * @param {string} [lastSeparator]
 * @returns {string}
 */
const enumerate = (arr, { separator = ', ', lastSeparator = ' или ' } = {}) => {
  if (!Array.isArray(arr)) {
    throw new Error(`You should pass array in enumerate()`);
  }
  arr = arr.filter(Boolean);
  switch (arr.length) {
    case 0: return '';
    case 1: return arr[0];
    default: {
      const [prev, last] = arr.slice(-2);
      return [
        ...arr.slice(0, -2),
        `${prev}${lastSeparator}${last}`
      ].join(separator);
    }
  }
};

module.exports = {
  enumerate,
};
