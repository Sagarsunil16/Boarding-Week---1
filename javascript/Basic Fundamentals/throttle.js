//Throttle = “Run the function at most once every X milliseconds, no matter how many times it's triggered.”

// Throttle function
function throttle(fn, delay) {
    let waiting = false;

    return function (...args) {
        if (!waiting) {
            fn.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, delay);
        }
    };
}

// Test function
function printme() {
    console.log("Hi", new Date().toLocaleTimeString());
}

// Create throttled version of printme
const throttledPrint = throttle(printme, 2000); // Run at most every 2 seconds

// Simulate calling every 500ms
let count = 0;
const interval = setInterval(() => {
    console.log("Calling throttledPrint()");
    throttledPrint();
    count++;
    if (count === 10) clearInterval(interval);
}, 500);
