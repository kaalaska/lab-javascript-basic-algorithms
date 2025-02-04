// Iteration 1: Names and Input
const hacker1 = "Karin";
console.log(`"The driver´s name is ${hacker1}"`);
const hacker2 = "Dirk";
console.log(`"The navigator´s name is ${hacker2}"`);


// Iteration 2: Conditionals
let lenHacker1= hacker1.length;
let lenHacker2= hacker2.length;

if(lenHacker1>lenHacker2){
  console.log(`The driver has the longest name, it has ${lenHacker1} characters.`);
}else if(lenHacker1<lenHacker2){
  console.log(`It seems that the navigator has the longest name, it has ${lenHacker2} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${lenHacker2} characters!`);
}


// Iteration 3: Loops
let upperHacker1=hacker1[0];
for(let i=1;i<lenHacker1;i++){
  upperHacker1+=" "+hacker1[i].toUpperCase();
}
console.log(`"${upperHacker1}"`);

let reverseHacker2="";
for(let i=lenHacker2-1;i>=0;i--){
  reverseHacker2+=hacker2[i];
}
console.log(`"${reverseHacker2}"`);

/*
reverseHacker2="";
for(let i=0;i<lenHacker2;i++){
  reverseHacker2+=hacker2[lenHacker2-i-1];
}
console.log(`"${reverseHacker2}"`);
*/

if(hacker1<hacker2){
  console.log(`The driver's name goes first`);
}else if(hacker1>hacker2){
  console.log(`Yo, the navigator goes first definitely`);
}else{
  console.log(`What?! You both have the same name?`);
}
