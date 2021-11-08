// object 1
const Week1 = {
    Day1 : "Monday", 
    Day2 : "Tuesday",
    Day3 : "Wednesday",
    Day4 : "Thursday",
    Day5 : "Friday",
    Day6 : "Saturday",
    Day7 : "Sunday",
};
console.log(Week1);

// object 2
const Week2 = {
    Day1 : "Monday", 
    Day2 : "Tuesday",
    Day3 : "Wednesday",
    Day4 : "Thursday",
};
    Week2.Day5 = "Friday",
    Week2.Day6 = "Saturday",
    Week2.Day7 = "Sunday",

console.log(Week2);

// object 3
const Week3 = {
    Day1 : "Monday", 
    Day2 : "Tuesday",
    Day3 : "Wednesday",
    Day4 : "Thursday",
    Day5 : "Friday",
    Day6 : "Saturday",
    Day7 : "Sunday",
};
delete Week3.Day3;
delete Week3.Day4;
delete Week3.Day5;
console.log(Week3);

// object 4
const Week4 = {
    Day1 : "Monday ", 
    Day2 : "Tuesday ",
    Day3 : "Wednesday ",
    Day4 : "Thursday ",
    Day5 : "Friday ",
    Day6 : "Saturday ",
    Day7 : "Sunday ",
};
Week4.WorkingDay = Week4.Day1 + Week4.Day2 + Week4.Day3 + Week4.Day4 + Week4.Day5;
Week4.Weekend = Week4.Day6 + Week4.Day7;

console.log("Working Day - ", Week4.WorkingDay);
console.log("Weekend - ", Week4.Weekend);

// object 5
const Week5 = {
    WorkingDay : "Monday, Tuesday, Wednesday, Thursday, Friday",
    Weekend : "Saturday, Sunday ",
    Igotowork : true,
    Stayhome : true,
};

if (Week5.Igotowork) {
    console.log("I go to work in" , Week5.WorkingDay);
}

// object 6
const Week6 = {
    WorkingDay : "Monday, Tuesday, Wednesday, Thursday, Friday",
    Weekend : "Saturday, Sunday ",
    Igotowork : false,
    Stayhome : true,
};

if (Week6.Igotowork) {
    console.log("I go to work in" , Week6.WorkingDay);
} else {console.log("I don't go to work in",Week6.Weekend);

};

// object 7
const Week7 = {
    Day1 : "Monday", 
    Day2 : "Tuesday",
    Day3 : "Wednesday",
    Day4 : "Thursday",
    Day5 : "Friday",
    Day6 : "Saturday",
    Day7 : "Sunday",
};
console.log(Week7.hasOwnProperty('Day1'));
console.log(Week7.hasOwnProperty('Day9'));

// object 8
const Week = {
    Day1 : "Monday", 
    Day2 : "Tuesday",
    Day3 : "Wednesday",
    Day4 : "Thursday",
    Day5 : "Friday",
    Day6 : "Saturday",
    Day7 : "Sunday",
};
    Week.Day5 = "Sunday",
    Week.Day6 = "Friday",
    Week.Day7 = "Saturday",
Object.freeze(Week);
    Week.Day5 = "Friday",
    Week.Day6 = "Saturday",
    Week.Day7 = "Sunday",
console.log(Week);

// object 9
const Week9 = {
    Day1 : "Monday ", 
    Day2 : "Tuesday ",
    Day3 : "Wednesday ",
    Day4 : "Thursday ",
    Day5 : "Friday ",
    Day6 : "Saturday ",
    Day7 : "Sunday ",
    };
console.log(Object.keys(Week9));
console.log(typeof Week9);

// object 10           ???
const Week10 = {
    Day1 : "Monday ", 
    Day2 : "Tuesday ",
    Day3 : "Wednesday ",  
};
const Week11 = {
        Day4 : "Thursday ",
        Day5 : "Friday ",
        Day6 : "Saturday ",
        Day7 : "Sunday ",
};
const returnedTarget = Object.assign(Week10, Week11);
console.log(Week10);
console.log(returnedTarget);

