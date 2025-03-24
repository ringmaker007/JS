// primitive
// 7 types : string,number,boolean,null,undefined,symbol,Big Int

const score = 100
const scoreValue = 100.1
const isloggedin = false
const outsidetemp = null
let userEmail

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id === anotherid);
const bignumber = 33523534567542n

// Reference (Non primitive)
// Array,,objects,functions
const heros = ['shaktiman','naagraj','ironman'];
let myobj = {
    name: 'kharanshu',
    age : 18,
}

const myfunction = function(){
    console.log('hello world');
}
console.log(typeof outsidetemp);
myfunction();

console.log(heros[0]);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Stack (primitive) , Heap (Non-primitive)
let myyoutubename = 'kharanshudotcom'
anothername = 'chaiaurcode'
console.log(myyoutubename);
console.log(anothername);
let user = {
    email : "user@gmail.com",
    upi : "upi@yespop"
}