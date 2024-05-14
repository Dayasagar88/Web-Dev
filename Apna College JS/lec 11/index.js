// // const student = {
// //     name : "Daya Sagar",
// //     marks : 7.8,
// //     printMarks : function(){
// //         console.log("marks = ",this.marks);
// //     }

// // }

// //Objects in JavaScript
// const employee = {
//     calculateTax() {
//         console.log("Tax Rate is 10%");
//     },
//     calcTax : function (){
//         console.log("Tax Rate is 20%");
//     }
// }

// const karanArjun = {
//     salery : 200000,
//     calcTax(){
//         console.log("Tax Rate is 30%");
//     }
// };

// const karanArjun1 = {
//     salery : 300000,
// };

// const karanArjun2= {
//     salery : 400000,
// };

// const karanArjun3 = {
//     salery : 500000,
// };

// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;


// //Classes in JavaScript
// class programming {
//     java(){
//         console.log("Java Programming");
//     }
//     cpp(){
//         console.log("C++ Programming");
//     }
//     python(){
//         console.log("Python Programming");
//     }
// }

// let obj = new programming();
// obj.java();
// obj.cpp();
// obj.python();


// class constructor{
//     constructor(construct){
//         console.log(construct)
//     }
// }
// let obj2 = new constructor("Mai Consturctor Hu");

// class marutiCar{
//     constructor(name, mileage){
//         this.name = name;
//         this.mileage = mileage;
//         console.log(name, mileage);
//     }
// }

// let obj3 = new marutiCar("Ertiga", 300);
// console.log(obj3);


// class parent{
//     hello(){
//         console.log("Say Hello");
//     }
// }
// class child extends parent
// {

// }

// let inherit = new child();
// inherit.hello();


// class person{

//     constructor(name){
//         console.log("entered the parent class constructor");
//         this.species = "Homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("Eating");
//     }
//     sleep(){
//         console.log("Sleeping");
//     }

//     work(){
//         console.log("work")
//     }
// }

// class employees extends person
// {
//     constructor(name){
//         console.log("entered the child class constructor");
//         super(name);//Invoking the parent class constructor
//         // this.branch = branch;
//         console.log("exits the child class constructor");

//     }
//     work(){
//         super.eat();
//         console.log("soloving problems and build projects");
//     }
// } 
// class Doctor extends person
// {
//     work(){
//         super.sleep();
//         console.log("Treat Patients");
//     }
// }

// let myObj = new employees();
// myObj.eat();
// myObj.sleep();
// myObj.work();
// let myObj2 = new Doctor();
// myObj2.work();


//Practice Q1
class user{
    name = "Daya";
    email = "ABC@gmail.com";
    viewData(name, email){
        this.name = name;
        this.email = email;
        console.log(name, email);
    }
}

class admin extends user
{
    edidData(){
        name = "Sagar2";
        email = "PQR2gmail.com";
        console.log(name, email);
    }
}

let p2 = new admin();
p2.edidData();
let p1 = new user();
p1.viewData("Sagar", "XYZ@gmail.com");



















