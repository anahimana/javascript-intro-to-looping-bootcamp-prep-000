function forLoop(array) {
  for(let x = 0; x < 25; x++){
    if(x > 1){
      array.push(`I am ${x} strange loops.`);
    }else{
      array.push(`I am ${x} strange loop.`);
    }
  }
  
  return array;
}

const myArray = [];
// console.log(forLoop(myArray));

function whileLoop(number) {
  counter = number;
  while(counter > 0) {
    counter -= 1;
    console.log(counter);
  }
  return "done";
}

// console.log(whileLoop(5));

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop() {
  do {
    console.log("doo-bee-doo-bee-doo");
  } while (incrementVariable() < 5);
}



