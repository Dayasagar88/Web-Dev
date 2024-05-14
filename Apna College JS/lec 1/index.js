console.log("Hello Apna College JavaScript");


//Variable
Name = "Sagar";
age = 22;
x = null;
y = undefined;
isFollow = true;
let symbol1 = Symbol("@");
let a = BigInt("12345");
console.log(symbol1);
console.log(a);
console.log(isFollow);


//Obejcts
const student = {
    name : "Daya",
    age : 22,
    rollNo : 18,
    sex : "Male",
    course : "B-Tech",
    section : "S-14",
    studyField : "Information Technology",
    shift : "Evening",
    CGPA : 7.8,
    isPass : true
}

student.age = student.age + 1;
student.name = "Sagar";


console.log(student);


const profile = {
    userName : "Sagar123",
    isFollow : true,
    posts : 195,
    followers : "290K",
    following : 4,
    name : "Sagar",
    profeesion : "Student",
    bio : "Hi! I am a next Web Devloper"
}
console.log(profile);