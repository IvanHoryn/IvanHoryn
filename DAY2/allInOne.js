// Коментувати один рядок
/* 
Коментувати багато рядків
*/    	
/* Оператори порівняння   
      ==  -  equal to                                   >   -   greater than
      === -  equal value and equal type                 <   -   less than
      !=  -  not equal                                  >=  -   greater than or equal to
      !== -  not equal value or not equal type          <=  -   less than or equal to                                                                     
      ?   -  ternary operator                            
Оператори присвоєння
    x = x + y  ===  x+= y       x = x * y  ===  x*= y        x = x % y  ===  x%= y
    x = x / y  ===  x/= y       x = x / y  ===  x/= y        x = x ** y  ===  x**= y
Логічні оператори
    && - logical and        || - logical or          ! - logical not
Побітові оператори - Будь-який числовий операнд в операції перетворюється на 32-розрядне число. Результат перетворюється назад у число JavaScript   
Operator   Description                Example       Same as            Result     Decimal
    &    -  AND                        5 & 1        0101 & 0001         0001        1
    |    -  OR                         5 | 1        0101 | 0001         0101        5
    ~    -  NOT                        ~5            ~0101              1010        10
    ^    -  XOR                        5^ 1         0101^0001           0100        4
    <<   -  Zero fill left shift       5<<1         0101<<1             1010        10
    >>   -  Signed right shift         5>>1         0101>>1             0010        2
    >>>  -  Zero fill right shift      5>>>1        0101>>>1            0010        2
*/
// Цифри_________________________________________________________________________________________________________________________________________________________
console.log(5);
console.log(0);
console.log(3312121);
console.log(0xfffcc);
console.log(0Xbbbccc);
console.log(0345);
console.log(01238);

console.log(12.45);
console.log(.35);
console.log(1.34e4);
console.log(4.5e-30);

// відображення цифр_________________________________________________________________________________________________________________________________________
var n = 12.67
console.log(n.toFixed(2));        //Returns a string representing a number in fixed-point notation.
console.log(n.toExponential(4))  //Returns a string containing a number represented in exponential notation.
console.log(n.toPrecision(3));   //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

console.log(+10)
console.log(-10)

var i = 10;
console.log(++i);
console.log(i);
console.log(i++);

// Математичні функції____________________________________________________________________________________________________________________________________________
console.log(5+10);   //   x = x + y  ===  x+= y
console.log(7-3);    //   x = x - y  ===  x-= y
console.log(5*9);    //   x = x * y  ===  x*= y
console.log(10/3);   //   x = x / y  ===  x/= y
console.log(10%3);   //   x = x % y  ===  x%= y
console.log(10**2);  //   x = x ** y  ===  x**= y
///////////////////////////////////////////////////////////////////////////
// TO print a result we can use
const a = 10;
const b = 30;
const sum = a + b;
 
console.log(a + b);
 
console.log("sum of a and b is equal to ", a + b);   
// also sum variable can be printed
console.log("sum of a and b is equal to ", sum);
 
// info
console.info("I can print some information");
// error
console.error("I can inform about an error");
//////////////////////////////////////////////////////////////////////////

var n = 100;
n = n + 20;
console.log(n)
n = n * 2;
console.log(n);

var n = 100;
n += 20;
console.log(n);
n *= 2;
console.log(n);
n /= 3;
console.log(n);

console.log(Math.sqrt(25)); // корінь квадратний
console.log(Math.pow(3,5)); // піднесення до степеня
console.log(Math.PI);       //An intrinsic object that provides basic mathematics functionality and constants.
console.log(Math.E);        //The mathematical constant e. This is Euler's number, the base of natural logarithms

// Оператори відношення______________________________________________________________________________________________________________________________________________________
console.log(5>10);
console.log(5<10);
console.log(10>=10);
console.log(8<=10);
console.log(10===10)
console.log(10!==10)
console.log(10=="10") // не використовується
console.log(10==="10")
// Оператор порівняння === - The strict equality operators (=== and !==) use the Strict Equality Comparison Algorithm to compare two operands..............................
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false
console.log(3 === 3);               // true
console.log(3 === 4);               // false
console.log(true === true);         // true
console.log(true === false);        // false
console.log(null === null);         // true
console.log("3" === 3);           // false
console.log(true === 1);          // false
console.log(null === undefined);  // false

const object1 = {
    name: "hello"
  }
  
  const object2 = {
    name: "hello"
  }
console.log(object1 === object2);  // false 
console.log(object1 === object1);  // true

// Оператор порівняння 
1 == 1;              // true
"hello" == "hello";  // true
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator
0 == !!undefined;     // true, look at Logical NOT operator
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false

const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true

const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true

// відображення чисел__________________________________________________________________________________________________________________________________________
console.log(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(-1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(-100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);

console.log(typeof Infinity);

console.log(Infinity*5);
console.log(Infinity*10);
console.log(Infinity*Infinity);
console.log(.00000000000000000000000000000000000000000000000000000000000000000000000000000000001);
console.log(-5/0);
console.log(0/0); //NaN - Not a number
console.log(Infinity/Infinity);
console.log(Math.sqrt(-10));

console.log(NaN===NaN);
console.log(0.2 + 0.1);
console.log(10000000000000008 + 10000000000000009);

// Строки____________________________________________________________________________________________________________________________________________________
console.log("some'long'string");
console.log('some"long"string');

console.log("hello there".length);
console.log("Another \
very long \
string");

console.log("Another \nvery long \nstring");

console.log("Another \n\tvery long \n\t\tstring");

console.log("Another \"very long\" string");  // екранування

console.log("Another \\very long\\ string");

var string = "Hello";
console.log(string + " world")// сумує рядки

var string2 = "Sometimes the same is difFerent";
console.log(string2.length);
console.log(string2.charAt(0));                 //Returns the character at the specified index
console.log(string2.charAt(30));
console.log(string2.charAt(string2.length - 1)); //Returns the character at the specified index
console.log(string2.substring(10));             //Returns the substring at the specified location within a String object.
console.log(string2.substring(10,21));          
console.log(string2.slice(-10));              //Returns a section of a string.  
console.log(string2.substr(14,4));          //Gets a substring beginning at the specified location and having the specified length.
console.log(string2.indexOf("i"));              
console.log(string2.indexOf("me"));         //Returns the position of the first occurrence of a substring.
console.log(string2.lastIndexOf("me"));  //Returns the last occurrence of a substring in the string.
console.log(string2.replace("is","is not"));
console.log(string2);
string2 = string2.replace("is", "is not") //Replaces text in a string, using a regular expression or search string.
console.log(string2);
console.log(string2.split(" "));        //Split a string into substrings using the specified separator and return them as an array.
console.log(string2.toUpperCase());     //Converts all the alphabetic characters in a string to uppercase.      
console.log(string2.toLowerCase());     //Converts all the alphabetic characters in a string to lowercase.
console.log(string2[4]);

// Логічний тип_____________________________________________________________________________________________________________________________________________
console.log(true);
console.log(false);

console.log(5===5);  // Порівнює значення (Comparing operands of the same type, Comparing operands of different types, Comparing objects.
console.log(5===6);  //

console.log(Boolean(5));

//Falsy values____________________________________________________________________________________________________________________________________________
console.log(Boolean(undefined)); //
console.log(Boolean(null));
console.log(Boolean(0));            // Завжди будуть  false
console.log(Boolean(NaN));
console.log(Boolean(""));        //

var s = "Text";

if (s) {
    console.log("Its true");
}

console.log(true && false); // 
console.log(true && true); //  Порівнює і повертає коли значення true 

console.log(true || false); // 
console.log(false|| false);  //Повертає значення true
console.log(false|| true);  //

console.log(!true);    // Повертає протилежне
console.log(!false);   // Повертає протилежне

var a = 0
    isTrue = false
isTrue && (a = 5);
        
console.log(a);

var someString = "Non-emty string";
var newString = someString || "Default String";
console.log(newString);

console.log(null == undefined);        // Returns true
console.log(null === undefined);       // Returns false

// Перевірки типів даних____________________________________________________________________________________________________________________________
const num = 1;
const str = "Some text";
 
typeof(num)             // Returns "number"
typeof(str)             // Returns "string"	    
 
"John".constructor
console.log("John".constructor);                     // Returns function String()  {[native code]}
(num).constructor  
console.log((num).constructor);                      // Returns function Number()  {[native code]}
false.constructor 
console.log(false.constructor);                      // Returns function Boolean() {[native code]}
[1,2,3,4].constructor          
console.log([1,2,3,4].constructor);                  // Returns function Array()   {[native code]}
{ uname:"John"; age:34 }.constructor
console.log({ name:"John",age:34 }.constructor);     // Returns function Object()  {[native code]}
new Date().constructor 
console.log(new Date().constructor);                 // Returns function Date()    {[native code]}
function () {}.constructor                       
console.log(function () {}.constructor);             // Returns function Function(){[native code]}

//Перетворення типів____________________________________________________________________________________________________________________________________________
console.log(5 + "5");
console.log(typeof(5 +"5")); 
console.log("5" * "4");
console.log(typeof("5" * "4"));
console.log("5" * "hi");
console.log(typeof("5" * "hi"));

console.log("5" == 5);                 // Returns true             
console.log("0" == false);             // Returns true              
console.log(0 == false);               // Returns true
console.log("5" == true);              // Returns false
console.log("" == false);              // Returns true
console.log(null == false);            // Returns false
console.log(null == true);             // Returns false
console.log(undefined == false);       // Returns false
console.log(undefined == true);        // Returns false
console.log(undefined == null);        // Returns true

console.log(Number("555"));         //An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
console.log(typeof(Number("555")));  
console.log(String(4433));          //Allows manipulation and formatting of text strings and determination and location of substrings within strings.
console.log(typeof(String(4433)));
console.log(Boolean(1));
console.log(typeof(Boolean(1)));

console.log(!!5);                   // ! - Оператор логического отрицания, переводить в логічний тип
console.log(!!0);
console.log(345 + "");
console.log(typeof(345 + ""));      // + - Унарний оператор, переводить в строку
console.log(+"454");
console.log(typeof+"454");          //                       переводить в число

var number = 22;
console.log(typeof number.toString());//Returns a string representation of an object.
number = 45;
console.log(number.toString(3));
number = 5;
console.log(number.toString(2));
 
console.log(typeof false);
console.log(typeof false.toString()); //Returns a string representation of an object.
console.log(parseInt("45"));                  //Converts a string to an integer.
console.log(parseInt("45 fdbdznnz", 10));
console.log(parseFloat("12.45 em"));           //Converts a string to a floating-point number.

console.log(typeof Infinity);
console.log(typeof Nan);
console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(NaN), typeof String(Infinity));
 
console.log(parseInt("45"));                  //Converts a string to an integer.
console.log(parseInt("45 fdbdznnz", 10));
console.log(parseFloat("12.45 em"));           //Converts a string to a floating-point number.

console.log(typeof Infinity);
console.log(typeof Nan);
console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(NaN), typeof String(Infinity));
 
console.log(+"");    // Пустий рядок при перетворенні в число стає 0

console.log(!!"");   //_______________________
console.log(!!NaN);
console.log(!!0);     // Будуть при перетворенні давати завжди false
console.log(!!null);
console.log(!!undefined);//_____________________

console.log(!!"HI");
console.log(+"4          "); // Пробіли ігноруються
console.log(+"          4"); //
console.log(+"    g    4");  //
console.log(+"4  c");        // Символи до або після числа вибивають помилку

console.log(parseInt("4 px"));  //Converts a string to an integer

console.log(+true);             // При претворенні буллінних значень вертає 1 або 0
console.log(+false);            //

// Умовні інструкції________________________________________________________________________________________________________________________________________
if (true) console.log("Its true");  // The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
if (false) console.log("Its true");
//////////////////////////////////////////////////////////////////
const a = 10;
const b = 100;
const c = 3;
 
// example with if
if (a === 10) {
   console.log("a is equal 10");
}
 
// example with if..else
if (b > 1) {
   console.log("b is bigger than 1");
} else {
   console.log("b is smaller than 1");
}
 
// example with else...if
if (c > 1) {
   console.log("c is bigger than 1");
} else if (c == 10) {
   console.log("c is equal 10");
} else {
   console.log("c is smaller than 1");
}
//////////////////////////////////////////////////////////////////
var n = 5;
if (n > 3); {
    n *= 3;
    console.log(n);
}
//////////////////////////////////////////////////////////////////
var uname = "Ivan", homecity;

if (uname === "John") {
    homecity = "Boston";
} else if (uname === "Ivan") {
    homecity = "Lviv";
} else if (uname === "Bill") {
    homecity = "LA";
}
console.log(homecity);
///////////////////////////////////////////////////////////
switch (uname) {
    case "Jonh": homecity = "Boston"; break;
    case "Ivan": homecity = "Lviv"; break;
    case "Bill": homecity = "LA";
    default: homecity = "Stambull";
        }
console.log(homecity);
///////////////////////////////////////////////////////////////////
const day = "10";
 
switch (day) {
case "10": {
      console.log("It is true");
} 
  break;
case "11": {
    console.log("It is true");
} 
  break;
case "12": {
    console.log("It is true");
} 
  break;
case "13": {
      console.log("It is true");
  } 
  break;
    
  default: {
      console.log("It is false");
  } 
}
// Об'єкти_______________________________________________________________________________________________________________________________________________
/* Об'єкти JavaScript - це набори властивостей і методів. 
   Властивості об'єктів — це дані, пов'язанні з об'єктом,
   Методи — функції для опрацювання даних об'єкта. 
   Адресація (посилання) властивостей у сценаріях JavaScript можлива або за назвами, або за номерами.*/

// Dog object /////////////////////////////////////////////////////////
const dog = {
    name: 'Teddy', // property
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof!"), // method
}
console.log("The Dog name is ", dog.name);
console.log("The Dog age is ", dog.age);
 
if (dog.hasHotDog) {
   console.log("The Dog has Hot Dog");
}
dog.speak()
///////////////////////////////////////////////////////////////////////  

// create with an object literal
const dog1 = { };
 
// with properties
const dog2 = { 
   friendly: true,
   speak: () => console.log("Woof! Woof!"),
};
 
// with constructor
const dog3 = new Object();

//Розширення об'єкта новими властивостями................................................	
const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
 };
  
  // adding new property name
 dog.name = "Rex";
 // adding new method
 dog["run"] = () => console.log("Run");

//Редагування властивостей об'єкта.......................................................
const dog = { 
    name: 'Teddy',
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
    likeCats: false
 };
  
  // adding a new property name
 dog.name = "Rex";
  
 // removing a property
 delete dog.likeCats;

/* Mетоди для роботи з об'єктами 
    obj.valueOf()  - повертає примітивне значення зазначеного об’єкта
    obj.toString() - повертає рядкове представлення об'єкта
    obj.hasOwnProperty('propName') - повертає логічне значення (true/false), яке вказує, чи містить об’єкт вказану властивість як пряму властивість цього об’єкта, а не успадковується через ланцюжок прототипів*/
//Статичні методи Object
/*  Object.assign(obj)  - копіює значення всіх перерахованих власних властивостей з одного або декількох вихідних об’єктів на цільовий об’єкт;
    Object.create(obj) - створює новий об’єкт із зазначеним об’єктом -прототипом та властивостями;
    Object.entries(obj) - повертає масив, що містить усі пари [ключ, значення] власних перерахованих рядкових властивостей даного об’єкта;
    Object.freeze(obj)  - заморожує об’єкт. Інший код не може видалити або змінити його властивості
    Object.keys(obj) - повертає масив, що містить імена всіх власних властивостей даного об’єкта;
    Object.isFrozen(obj), Object.isExtensible(obj)...та інші*/


// Умовний оператор (Тернарний)__________________________________________________________________________________________________________________________
var x = 15;
var text = x > 10 ? "x більше десяти" : "х менше або рівне десяти";
console.log(text);
///////////////////////////////////
var x = 10;
var text = x > 10 ? "x більше десяти" : x < 10 ? "x менше десяти" : "х рівне десяти";
console.log(text);
////////////////////////////////////
var x = 5;
if (x > 10) {
    text = "x більше десяти";
} else if (x < 10) {
    text = "x менше десяти";
} else {
    text = "х рівне десяти"
}
console.log(text);
///////////////////////////////////
var test = (15,20);
console.log(test);

// Цикли___________________________________________________________________________________________________________________________________________________
// for (ініціалізація; тест; інкремент) (1 тіло циклу - 1 ітерація)

/*for(;;);  -  безкінечний цикл який не робить нічого
  for(;;) console.log("hi");    - безкінечний цикл який виводить "hi"*/
var i;
for (i = 0; i < 10; i++) {    // Поветає числа від 0 до 9 
   console.log(typeof i); 
}
//////////////////////////////////////////////////////////
var e;
for (e = 10; e--;) {
    console.log(e);           // Поветає числа від 9 до 0 
}
///////////////////////////////////////////////////////////
var z;
for (z = 10; z > 0; z--) {    // Поветає числа 10 до 1
    console.log(z);
}
// while (вираження) інструкція
var i = 0
while (i < 10) {
    console.log(i);         //Поветає числа від 0 до 9
    i++
}
////////////////////////////////////////////////////////////
var i = 0
while (i < 10) {
    console.log(i++);       //Поветає числа від 0 до 9
}
//////////////////////////////////////////////////////////////
var i = 10
while (i--) {
    console.log(i);         //Поветає числа від 9 до 0 
}
// do інструкція while (вираження)
var i = 0;
do console.log(i++); while (i < 10)   //Поветає числа від 0 до 9

//Функції_______________________________________________________________________________________________________________________________________________________
//function ідентифікатор(аргументи) {
//   інстррукції
//   return вираження
// }
function great(name) {
    return "Hello " + name;
}
console.log(great("Ivan"))
console.log(great("Ivan").toUpperCase())
//////////////////////////////////////////////////////////
var great = function(name) {
    return "hello " + name;
};
console.log(great("Ivan", 35))     //Якщо більше аргументів - лишні не ініціалізуються
console.log(great())               //Якщо менше, всіm не ініціалізованим елементам присвоюється Undefined
///////////////////////////////////////////////////////////
var great = function(name) {
    console.log(arguments);
    return "hello " + name;
};
console.log(great("Ivan", 34, 23, 26).toUpperCase());
////////////////////////////////////////////////////////////////////////////////
var func = function(callback) {
    var name = "Ivan";
    callback(name);
};

func(function(n){
    console.log("Hello " + n);
});
///////////////////////////////////////////////////////////////////////
var func = function() {
    return function() {         //Не відображається в консолі
        console.log("Hi");
    }
};
//////////////////////////////////////////////////////////////////////////
var func = function() {
    return function() {
        console.log("Hi");
    }                           //Відображається в консолі                                
};
console.log(func);
func()();
////////////////////////////////////////////////////////////////////////////////
var greeting = function(name) {
    return "Hello " + name;
 }("Ivan");
 console.log(greeting);

//Ланцюги області видимості____________________________________________________________________________________________________________________________________
//Глобалні змінні - ті що не записані у жодну функцію
//Локальні змінні - ті що оголошені всередині функції
//Локальні змінні мають більший пріорітет
var i = 5;

var func = function() {
    var i = 10;
    console.log(i);
};

console.log(i);
func();