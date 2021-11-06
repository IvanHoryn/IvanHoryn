//прості типи

var myNumber = 2325,
    mybool = true,
    myStrihg = "some",
    myUndef = undefined,
    anotherVar = 325;

    console.log(typeof myNumber);
    console.log(typeof mybool);
    console.log(typeof myStrihg);
    console.log(typeof myUndef);

//Обєктні типи

var obj = {username: "sorax"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function() {};

    console.log("");
    console.log(typeof obj);
    console.log(typeof array);
    console.log(typeof regexp);
    console.log(typeof func);


    obj.username = "Star";
    array[1] = 332654;

    console.log(array);

    console.log(myStrihg.toUpperCase());
    console.log(myStrihg);

    var a, b, c, d;
    a = b = c = d = 5

    console.log(a);
