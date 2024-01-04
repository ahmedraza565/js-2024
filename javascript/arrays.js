const myArr = [1,2,3,4,5]

// const myArr = new Array(1,2,3,4,5)

// console.log(myArr);

// console.log(myArr[1]);

myArr.push(6)
myArr.pop()

// myArr.unshift(0) // adds an element to the start of an array

// myArr.shift() // removes an element from the start of an array 

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(typeof newArr)

console.log(myArr.slice(2,4)) // does not change actual array 

myArr.splice(0,3) // changes actual array 

console.log(myArr);
