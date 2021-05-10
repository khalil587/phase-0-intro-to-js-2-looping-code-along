const names = [];
const event = [];

function writeCards(names, event) {
   let newArray = []; 
   for (let i = 0; i < names.length; i++) {
      newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      debugger
    }

    return newArray;

} 
function countDown(count = 10) {
 while (count >=0) {
  console.log(count--);
} 
}


