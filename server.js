// var add =(a,b)=>a+b;



// var result=add(123,7);
// console.log(result);

// (function(){
//     console.log('prince is added');
// })();


// function callback(){
//     console.log('adding is succesuffly completed');
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("result : "+result);
//     callback();
// }

// add(3,4,callback);

const add=function(a,b,callback){
        var result=a+b;
        console.log("result : "+result);
        callback();
    }

// add(2,3,function(){
//     console.log("add completed")
// })
add(2,3,()=> console.log("add complete"))




