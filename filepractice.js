 var fs=require('fs');
var os=require('os');

const notes=require('./note.js');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt','Hi '+user.username+'\n',()=>{
//     console.log('file is created');
// });
 //console.log(notes)

 console.log('server file is available');

 var age= notes.age;
 
 var result=notes.addNumber(age,18);

 console.log(age);
 console.log('result is '+result);