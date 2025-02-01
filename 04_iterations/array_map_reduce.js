const nums = [1,2,3,4,5,6,7,8]

let newNums = nums.map((num) => num + 10);
console.log(newNums)

newNums = nums
        .map((num) => num * 10)
        .filter((num) => num > 30);

console.log(newNums)

let initialValue = 0;
newNums = nums.reduce(function(accumulator ,currentValue) {
    return accumulator + currentValue
},initialValue); // Reduce is used to reduce the array into one value. accumulator is empty value then in first loop Initial value is given to accumulater and then current value is added in each loop and assigned to accumulator.

console.log(newNums);
