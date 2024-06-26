// ROCK PAPER SCISSOR

import inquirer from "inquirer";

// person 1
let person1=await inquirer.prompt([
    { 
type:'string',
name:'choose',
message:'P1 select rock paper scissor',
}
]);

// person 2
let person2=await inquirer.prompt([
    { 
type:'string',
name:'choose',
message:'P2 select rock paper scissor',
}
]);

// we use if else statement
if(person1.choose===person2.choose){
    console.log("game tied")
}
else if((person1.choose==="paper" && person2.choose==="rock") || (person1.choose==="scissor" && person2==="paper") ||
(person1==="rock" && person2==="scissor")){
    console.log("player 1 wins")
}
else{
    console.log("player 2 wins")
}

    
