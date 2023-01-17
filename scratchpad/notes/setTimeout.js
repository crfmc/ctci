/**
 * Here I will write notes on the setTimeout() function.
 * 
 */



let p = true;
let i = 0;

while (p) {
  setTimeout(() => {
    p = false;
    console.log("hello3");
  }, 100);
  console.log(i);
  i++;
  if (i > 100) {
    p = false;
  }
}
