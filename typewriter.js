const sentence = "hello there from lighthouse labs";
const typeWriter = (sentence) => {
  
  let delay = 0;

  for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
    
  delay += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay + 50);
}

typeWriter(sentence);

  // console.log('\n')
  
  // setTimeout(() => 
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
