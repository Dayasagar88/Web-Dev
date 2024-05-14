// //Array in JS
// let marks = [27,59,67,88];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks) //Object


// marks[0] = 82;//Arrays in JS are muttable
// console.log(marks[0]);

// let cities = ["Delhi", "Shimla", "Haryana","Jammu", "kolkata","Goa"]
// let heroes = ["Hanuman", "Ram", "Laxman","Krishna","Ganesha", "Mahadev"];
// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i].toUpperCase());
// }

// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }



// //Practice Question 1
// let marks = [40,80,90,30,60,90];
// let sum = 0;

// for(let i of marks){
//     sum = sum + i;
// }

// let avg = sum/marks.length;
// console.log(`The average marks of student = ${avg}%`);


// //Practice Question 2
// let initPrice = [250,645,300,900,50];
// let offer = 10;
// let finalPrice = [];
// for(let i = 0; i < initPrice.length; i++){
//     let offPrice = initPrice[i]/offer;
//     finalPrice.push(initPrice[i] - offPrice);
// }
// console.log(finalPrice);
// console.log(finalPrice[2]);


// let items = [250,645,300,900,50];

// let idx = 0;
// for(let val of items){
//     // console.log(`Value before offer = ${val}`);
//     let offer = val/10;
//     items[idx] = items[idx] - offer;
//     console.log(`Value after offer = ${items[idx]}`)
//     idx++;
// }


// for(let i = 0; i < items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;

// }
// console.log(items);

//Array Methods = push(), pop(), toString()
// let mobiles = ["Oneplus", "Samsung", "Iphone", "Realme", "Xiomi"]

// mobiles.push("Nokia", "IQOO")

// console.log(mobiles.toString())
// console.log(mobiles);

// let dlt = mobiles.pop();
// console.log("Deleted item", dlt);
// console.log(mobiles);


// let arr1 = [0,1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr3 = [11,12,13,14,15];

// let newArr = arr1.concat(arr2,arr3);
// console.log(newArr);

// newArr.shift();                                         
// newArr.unshift(-1)
// console.log(newArr);

// let sliced = newArr.slice(2,4);
// console.log(sliced);

// // splice method
// //Add element
// newArr.splice(7, 0 ,101)

// //Delete element 
// newArr.splice(2,2);

// //Replace element
// newArr.splice(0,1,102);



//Practice Question
let companies = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies)

companies.push("Amazon");
console.log(companies);








































