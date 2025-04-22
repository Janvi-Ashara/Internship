// 1. Creating a Simple Promise (with setTimeout)
function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
      }, 2000);
    });
  }

  delayedPromise().then((message) => {
    console.log(message);
  });

// 2. Using then() and catch()

  function getData(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 3000);
    });
  }

  getData(true)
    .then((msg) => console.log( msg))
    .catch((err) => console.error(err));

// 3. Chaining Promises
function step1() {
  return Promise.resolve("Step 1 completed.");
}

function step2(prev) {
  return Promise.resolve(prev + " Step 2 completed.");
}

function step3(prev) {
  return Promise.resolve(prev + "Step 3 completed.");
}

step1()
  .then(step2)
  .then(step3)
  .then((finalResult) => {
    console.log("Final Result:", finalResult);
  });

function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    success ? resolve(" Operation succeeded!") : reject(" Operation failed!");
  });
}

riskyOperation()
  .then((res) => console.log(res))
  .catch((err) => console.error("Error caught:", err))
  .finally(() => console.log(" Operation finished (success or fail)"));

//5. Using Promise.all() (Wait for all to finish)
const promise1 = new Promise((res) => setTimeout(() => res("P1 done"), 1000));
const promise2 = new Promise((res) => setTimeout(() => res("P2 done"), 2000));
const promise3 = new Promise((res) => setTimeout(() => res("P3 done"), 2500));

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log("📦 All Promises:", results);
});

// 6. Using Promise.race() (First one to resolve)
const p1 = new Promise((res) => setTimeout(() => res(" Fastest: P1"), 1000));
const p2 = new Promise((res) => setTimeout(() => res(" Slower: P2"), 2000));

Promise.race([p1, p2]).then((result) => {
  console.log("⚡ Winner:", result);
});
