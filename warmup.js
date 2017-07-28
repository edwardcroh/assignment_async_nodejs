// warmup 1

var p = Promise.resolve("Hello!");

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000);
});


// warmup 2

function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
}

function countDown(timer) {
  if (timer) {
    console.log(timer);
    return(timer-100);
  } else {
    console.log("Done");
  }
};

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown);


// warmup 3

function squareNum(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num == undefined) {
      reject("Enter a number");
    } else {
      resolve(num * num);
    }
  });
}

var array = [1,2,3,4,5,6,7,8,9];

array = array.map(function(number) {
  return squareNum(number);
});

Promise.all(array)
  .then(function(results) {
    console.log(results);
  });


// warmup 4

function doBadThing(forRealz){
  return new Promise(function(resolve, reject) {
    if (forRealz == true) {
      reject("nay");
    } else {
      resolve("Yay!");
    }
  });
}

doBadThing(false)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

doBadThing(false)
  .then(function(result) {
    console.log(result);
    throw "errorrrrrr!";
  })
  .catch(function(error) {
    console.log(error);
  });
