// console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);


setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
  }, 3000);
  
  const int = setInterval(() => {
    console.log('in the interval');
  }, 1000);
  
  console.log(__dirname);
  console.log(__filename);
  
  // no access to DOM
//   console.log(document.querySelector);
  