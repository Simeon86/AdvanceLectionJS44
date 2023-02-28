let obj = {name: 'Simeon', age: 35}
console.log(obj);

JSON.stringify(obj);
console.log(obj);

let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

let serverResponse = JSON.parse(jsonObj)
console.log(serverResponse)

console.log('//////////////////////////////////MAP & SET/////////////////////////////////////////////');

console.log('//////////////////////////////////MAP/////////////////////////////////////////////');

let map2 = new Map();

map2.set('1', 'string1');
map2.set(1, 'numberKey');
map2.set(true, 'booleanKey');

console.log(map2);
console.log(map2[0]);
console.log(map2[1]);

console.log(map2.get(1));
console.log(map2.get('1'));

console.log(map2.size);

console.log(map2.has(2));
console.log(map2.has(1));

console.log(map2.delete(1));
console.log(map2);

console.log(map2.clear());
console.log(map2);



let user = {name: 'Simeon'};
let user2 = {name: 'Valeria'};

let map = new Map();

map.set(user, true);
map.set(user2, false);

console.log(map);

console.log('////////////////////////////////////////////////////////////////////');

let obj1 = {}
obj1[user] = true;
console.log(obj1)
console.log(obj1.toString());

console.log('////////////////////////////////////////////////////////////////////');

let recepiMap = new Map([
    ['cucumber', 500],
    ['tomatos', 350],
    ['onion', 50],
]);
console.log(recepiMap);
console.log(recepiMap.keys());


for(let vegetable of recepiMap.keys())
    console.log(vegetable);

for(let amount of recepiMap.values())
    console.log(amount);

for(let entry of recepiMap.values())
    console.log(entry);

recepiMap.forEach((value, key, map) => {
    console.log(`${key} => ${value}`);
})

console.log('////////////////////////////////////////////////////////////////////');

let map1 = new Map([
    ['1', true],
    [1, false],
    [true, 'something']
])

console.log(map1)

console.log('////////////////////////////////////////////////////////////////////');

let obj2 = {
    name: 'Advance',
    status: 'Academy',
}
console.log(obj2);

let mapFromObject = new Map(Object.entries(obj2))

mapFromObject.set(obj2, true);

console.log(mapFromObject);

console.log('////////////////////////////////////////////////////////////////////');

let objectFromMap = Object.fromEntries(mapFromObject.entries())
console.log(objectFromMap)