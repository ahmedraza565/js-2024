let x = 10;
let y = x;
y = 20;

console.log(x);

let student = {
    name: "Ahmed",
    age: 18, 
    group: "Pre medical",
};

let student2 = student;

student2.age = 20;
console.log(student.age);