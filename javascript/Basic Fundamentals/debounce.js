// Debounce = “Wait until the user stops doing something for a while, then run the action.”

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function printme() {
    console.log("Hi");
}

// Create a debounced version of printme
const debouncedPrint = debounce(printme, 3000);

// Simulate typing or events
debouncedPrint(); // Waits 3 seconds
debouncedPrint(); // Resets timer
debouncedPrint(); // Resets timer again

// Only runs ONCE after 3 seconds from the last call
