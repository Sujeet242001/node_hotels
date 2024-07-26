// const jsonstring='{"name":"john","age":30,"city":"Pune"}';
// const jsonObject=JSON.parse(jsonstring);
// console.log(jsonObject.name);

const objectToConvert ={
    name:"alice",age:25
};

const json=JSON.stringify(objectToConvert);
console.log(json)
console.log(typeof(json));
