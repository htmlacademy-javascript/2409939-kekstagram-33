// 1. Функция для проверки длины строки.
/*
Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
Эта функция нам пригодится для валидации формы. Примеры использования функции:
 */

const checkStringLength = (string, length) => {
  if(string.length <= length) {
    return true;
  }
  return false;
};

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

/*
2. Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
*/

const checkPalindrome = (string) => {
  const sourceString = string.replaceAll(' ', '').toLowerCase();
  const newString = sourceString.split('').reverse('').join('');
  if (newString === sourceString) {
    return true;
  }
  return false;
};

// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false
// Это палиндром
checkPalindrome('Лёша на полке клопа нашёл '); // true

/*
3. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
функция должна вернуть NaN:
*/

const extractsNumbers = (string) => {
  string = String(string);
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!(Number.isNaN(parseInt(string[i], 10)))) {
      newString += string[i];
    }
  }
  return parseInt(newString, 10);
};

extractsNumbers('2023 год');
extractsNumbers('ECMAScript 2022');
extractsNumbers('1 кефир, 0.5 батона');
extractsNumbers('агент 007');
extractsNumbers('а я томат');
extractsNumbers(2023);
extractsNumbers(-1);
extractsNumbers(1.5);

