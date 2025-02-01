const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num)
}


const map = new Map(); // All the keys are in order in which is set
map.set("one",1);
map.set("two",2);
map.set("three",3);
map.set("four",4);

console.log(map);
map.set("one",5);
console.log(map);

for(const [key,value] of map){
    console.log(key + " -> ", value)
}