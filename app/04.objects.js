console.log("Topic: Objects");

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// var Tune = function (title, artist) {
//     this.title = title;
//     this.artist = artist;
//     }
//     Tune.prototype.concat = function () {
//     return this.title + ' ' + this.artist;
//     }

//     var tune = new Tune("Song", "SomeArtist")
//     console.log(tune.concat())

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// {
//   const Tune = (function() {
//     let _title;
//     let _artist;

//     //constructor
//     const Tune = function(title, artist) {
//       _title = title;
//       _artist = artist;
//     };

//     Tune.prototype.concat = function() {
//       return this._title + " " + this._artist;
//     };
//     return Tune;
//   })();
// }
// var Tune = function Tune(title, artist) {
//   this.title = title;
//   this.artist = artist;

//   return {
//     concat() {
//       return this.title + " " + this.artist;
//     }
//   };
// };

// Tune.prototype.concat = function() {
//   return this.title + " " + this.artist;
// };

// const tune = new Tune("a", "b");
// console.log(tune);
// console.log(tune.concat());

// {
//   const Tune = (function() {
//     //constructor
//     const Tune = function(title, artist) {
//       this.concat = function() {
//         return title + artist;
//       };
//     };
//     return Tune;
//   })();
//   console.log(new Tune("1", "a").concat());
// }

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// String.prototype.exclaim = String.prototype.exclaim
//   ? String.prototype.exclaim
//   : function() {
//       console.log(this + "!");
//     };
// console.log("Hello".exclaim());
// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   getTitle() {
//     return this.title;
//   }
//   getAuthor() {
//     return this.author;
//   }
// }

// class TechBook extends Book {
//   constructor(title, author, category) {
//     super(title, author);
//     this.category = category;
//   }
//   getCategory() {
//     return this.category;
//   }
//   getBook() {
//     return `${this.author} ${this.title} ${this.category}`;
//   }
// }

// console.log(new TechBook("Title", "Artist", "Category"));

//function

// const Book = (function() {
//   function Book(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   Book.prototype.getTitle = function() {
//     return this.title;
//   };
//   Book.prototype.getAuthor = function() {
//     return this.author;
//   };
// })();

// const TechBook = (function(_super) {
//   function Book(title, author, category) {
//     // this.title = title;
//     // this.author = author;
//     _super.call(this, title, author);
//     this.category = category;
//   }
//   TechBook.prototype = Object.create(_super.prototype);
//   TechBook.prototype.constructor = TechBook;
//   TechBook.prototype.getCategory = function() {
//     return this.category;
//   };
//   TechBook.prototype.getBook = function() {
//     return `${this.author} ${this.title} ${this.category}`;
//   };
// })(Book);

// console.log(new TechBook("Title", "Artist", "Category"));

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// class Shape {
//   constructor() {
//     Shape.count++;
//   }
// }
// Shape.count = 0;
// //   static count;
// //   constructor() {
// //     count++;
// //   }
// //}

// class Rectangle extends Shape {
//   constructor(height, width) {
//     super();
//     this.width = this.width;
//     this.height = height;
//   }

//   area() {
//     return this.height * this.weight;
//   }
// }

// const r1 = new Rectangle(10, 30);
// console.log(r1);
// console.log(Shape.count);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// let Person = function() {
//   function Person() {
//     this.firstName;
//     this.lastName;
//   }
//   Person.prototype.setFirstName = function(value) {
//     this.firstName = value;
//     return this;
//   };
//   Person.prototype.setLasttName = function() {
//     this.lastName = value;
//     return this;
//   };
// };

// function Person () {
//     this.firstName = undefined;
//     this.lastName = undefined;
//     }
//     Person.prototype.setFirstName = function(value) {
//     this.firstName = value;
//     return this;
//     }
//     Person.prototype.setLastName = function(value) {
//     this.lastName = value;
//     return this;
//     }

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   setFirstName(firstName) {
//     this.firstName = firstName;
//     return this;
//   }
//   setLastName(lastName) {
//     this.lastName = lastName;
//     return this;
//   }
// }

// const person = new Person("fisrt", "last");
// person.setFirstName("new").setLasttName("old");
// console.log(person);

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.

// let data = {};
// Object.defineProperties(data, {
//   id: { value: 1, writable: true },
//   type: { value: "primary", enumerable: true },
//   category: {
//     get: function() {
//       return this._category;
//     },
//     set: function(value) {
//       this._category = value;
//     },
//     configurable: true,
//     enumerable: true
//   }
// });

// for (let key in data) {
//   console.log(`key - ${key}`);
//}
// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

// let data = { id: 1, name: 2 };

// Object.preventExtensions(data);
// console.log(data2);
// data2.c = "3";
// console.log(data2);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

// class Task {
//   constructor(name) {
//     this.id = Task.id++;
//     this.name = name;
//     // this.isComplete = false;  //не обяз оно и так б undef
//   }
//   completeTask() {
//     this.isComplete = true;
//   }
//   toString() {
//     return this.isComplete
//       ? console.log("[completed] Task " + this.id)
//       : console.log("[new] Task " + this.id);
//   }
// }
// Task.id = 0;

// let tasks = [];
// //     1. Добавить задачу в список
// const t = new Task("do");
// tasks.push(t);
// const t1 = new Task("do1");
// tasks.push(t1);
// //     2. Получить и вывести в консоль список всех задач
// //        в формате "[new] Task 1", "[completed] Task2"
// // t.toString();
// // t1.toString();
// // console.log(tasks);

// //     3. Отметить указанную задачу как выполненную
// t.completeTask();
// // t.toString();
// // t1.toString();

// //     4. Удалить задачу из списка
// tasks.splice(0, 1);
// //console.log(tasks);

// const t3 = new Task("do3");
// tasks.push(t3);
// const t2 = new Task("do2");
// tasks.push(t2);

// //     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
// tasks.sort(function(a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// console.log(tasks);
// //6. Очистить список задач
// tasks.length = 0;
// console.log(tasks);


