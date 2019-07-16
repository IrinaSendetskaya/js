console.log("Topic: Arrays");

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

//  let arr3 = [1,2,'3', '4'];
// // arr3.splice(3,0,'newElement');
// // console.log(arr3);

//  let arr33 = [1,2,3,4,5];
// // let newArr33 = arr33.slice(0,3).concat('newElement').concat(arr33.slice(3));
// // console.log(newArr33);

// const arr2 = [...arr33.slice(0, 3), 4, ...arr33.slice(3)];

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

// var arr4 = [1, 2, 3, 4, 5];
// for (a of arr4) {
//   console.log(a);
// }

// let arr44 = [1,2,3,4];
// arr44.forEach(e => console.log(e));

// let arr444 = ['a', 'b', 'c'];
// arr444.forEach(el => console.log(el));

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// let arr5 = [1, 26, 39, 48, 56, 67];
// arr5.filter(t => t > 50).reduce((t,s) => console.log(t+s));

// const arr1 = [1, 60, 20];
// const result = arr1.reduce((sum, item) => {
//   if (item > 50) {
//     return sum + item;
//   }
//   return sum;
// }, 0);
// console.log(result);

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

// let arr6 = [1, 26, 39, 48, 56, 67];

// console.log(arr6.join("|"));

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.

// let arr7 = [1, 26, 39, 48, 56, 67];
// console.log(arr7.sort((a, b) => a - b).reverse());

// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

// var arr8 = [3, 0, -1, 12, -2, -4, 0, 7, 2];
// console.log(
//   arr8
//     .filter(t => t < 0)
//     .concat(arr8.filter(t => t === 0))
//     .concat(arr8.filter(t => t > 0))
// );

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

// var styles=["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles.splice(-2,1);
// console.log(styles);
// styles.push("Classics");
// console.log(styles);

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// var someString = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

// console.log(someString.split("r").length - 1);

// console.log(someString.split("k").length - 1);

// console.log(someString.split("t").length - 1);

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// let arr = [];
// arr.push(Math.random());

// let arr14 = [1, 4, 6, 7];
// console.log(arr14[Math.floor(Math.random() * arr14.length)]);

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// //arr.forEach(t => console.log(...t));
// console.log(arr);

// const arr12 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// arr12.forEach(x => console.log(...x));
// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr.flat());
// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// var arr = ["a", "b"];
// console.log(arr.indexOf("b"));

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.

// var arr = [{name:'a'},{name:'b'}];
// console.log(arr.findIndex(t=>t.name==='b'));

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// let arr = [1, 2, 2, 4, 5, 4, 5];
// console.log(new Set(arr));

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// let arr = [1, 2, 2, 4, 5, 4, 5];
// const duplocateValue = arr.find(e => arr.indexOf(e) !== arr.lastIndexOf(e));
// console.log(duplocateValue);
// console.log(arr.map(t => (t === duplocateValue ? "*" : t)));

// const task17 = [1, 2, 5, 5, 9, 5, 0];
// const doubleValue = task17.find(
//   (el, index, array) => array.filter(value => value === el).length > 1
// );
// console.log(doubleValue);
// console.log(task17.map(el => (el === doubleValue ? "*" : el)));

// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

// const arrDec = [1, 5, 3, 4, 5, 6, 9, 9, 9];
// const arrBin = arrDec.map(item => item.toString(2));
// const arrOct = arrDec.map(item => item.toString(8));
// const arrHex = arrDec.map(item => item.toString(16));

// console.log(arrDec, arrBin, arrOct, arrHex);

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// var someString = "a big brown fox jumps over the lazy dog";
// let arr = someString.split(" ").filter(t => t.length <= 3);
// console.log(arr);

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// var arr = ["a big 5 brown", 55, "fox jumps over the lazy dog", { name: "a" }];
// var ifString = arr.every(t => t.typeof === "string");
// console.log(ifString);
// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

// let arr = [1, 2, 2, 4, 5, 4, 5];

// const binarySearching = (array, value) => {
//   let start = array[0];
//   let end = array.length;
//   function binarySearch(array, value, start, end) {
//     if (end < 1) return arr[0];
//     const middle = Math.floor(start + (end - start) / 2);
//     if (value == array[middle]) return array[middle];
//     if (end - 1 === start)
//       return Math.abs(array[start] - value) > Math.abs(array[end] - value)
//         ? array[end]
//         : array[start];
//     if (value > array[middle]) return binarySearch(array, value, middle, end);
//     if (value < array[middle]) return binarySearch(array, value, start, middle);
//     // return array.indexOf(value);
//     else return -1;
//   }
// };

// console.log(binarySearching(arr, 1));

// const a21 = [1, 2, 4, 6, 7, 12, 20];
// function binarySearch(arr, value) {
//   let middle = Math.round((arr.length - 1) / 2);
//   if (value === arr[middle]) return middle;
//   else if (middle !== 0 && value > arr[middle])
//     return binarySearch(arr.slice(middle), value);
//   else if (middle !== 0 && value < arr[middle])
//     return binarySearch(arr.slice(0, middle), value);
//   return -1;
// }

// console.log(binarySearch(a21, 6));

// Task 22
//Создать массив и объект свойств как в массиве, и изменить массив в зависимости от свойств объекта
// let arr1 = [
//   {
//     status: "approved",
//     priorities: [
//       { priority: "critical", isExpanded: false },
//       { priority: "low", isExpanded: true }
//     ]
//   },
//   {
//     status: "canceled",
//     priorities: [
//       { priority: "critical", isExpanded: true },
//       { priority: "low", isExpanded: false }
//     ]
//   }
// ];
// let arr2 = { status: "canceled", priority: "critical", isExpanded: false };

// //1 способ

// arr1.map(x => {
//   if (x.status === arr2.status) {
//     x.priorities.find(p => p.priority === arr2.priority).isExpanded =
//       arr2.isExpanded;
//   }
// });

// console.log(arr1);

// //2 способ
// let updateArr = (arr1, arr2) => {
//   return [
//     ...arr1.map(x => {
//       if (x.status === arr2.status) {
//         x.priorities.find(p => p.priority == arr2.priority).isExpanded =
//           arr2.isExpanded;
//       }
//       return x;
//     })
//   ];
// };

// console.log(updateArr(arr1,arr2));

// Task 23
//Написать функцию, которая будет заменять значения индексами с определенного места

let arr = [1, 2, 8, 4, 5, 10, 5];

let changeSortIndexes = (source, startIndex, startSortIndex) => {
  const arr = [];
  let nextIndex = startSortIndex;

  for (let i = startIndex; i < source.length; i++) {
    if (source[i] !== nextIndex) {
      source[i] = nextIndex;
      arr.push(source[i]);
    }
    nextIndex++;
  }
  return arr;
};

console.log(changeSortIndexes(arr, 3, 2));
