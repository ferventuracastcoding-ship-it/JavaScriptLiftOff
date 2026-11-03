// ==========================================
// 1. COUNTING LOOP
// ==========================================

let count = 1;

while (count <= 10) {
    console.log("Count:", count);
    count++;
}


// ==========================================
// 2. COUNTDOWN / ROCKET LAUNCH
// ==========================================

let countdown = 10;

while (countdown > 0) {
    console.log("T-minus", countdown);
    countdown--;
}

console.log("🚀 LIFTOFF!");


// ==========================================
// 3. SUM NUMBERS
// ==========================================

let number = 1;
let sum = 0;

while (number <= 100) {
    sum += number;
    number++;
}

console.log("Sum:", sum);


// ==========================================
// 4. TRAVERSE AN ARRAY
// ==========================================

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn"
];

let index = 0;

while (index < planets.length) {
    console.log(
        `Planet ${index + 1}:`,
        planets[index]
    );

    index++;
}


// ==========================================
// 5. SEARCH AN ARRAY
// ==========================================

const robots = [
    "Robot-001",
    "Robot-002",
    "Robot-003",
    "Robot-004",
    "Robot-005"
];

let i = 0;
let target = "Robot-004";
let found = false;

while (i < robots.length) {

    if (robots[i] === target) {
        found = true;
        break;
    }

    i++;
}

if (found) {
    console.log("Robot found:", target);
} else {
    console.log("Robot not found");
}


// ==========================================
// 6. BINARY SEARCH
// ==========================================

const numbers = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100
];

let left = 0;
let right = numbers.length - 1;
let search = 70;

while (left <= right) {

    const middle =
        Math.floor((left + right) / 2);

    console.log(
        "Checking:",
        numbers[middle]
    );

    if (numbers[middle] === search) {
        console.log("Found:", search);
        break;
    }

    if (numbers[middle] < search) {
        left = middle + 1;
    } else {
        right = middle - 1;
    }
}


// ==========================================
// 7. LINKED LIST TRAVERSAL
// ==========================================

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node("Earth");

head.next = new Node("Mars");
head.next.next = new Node("Jupiter");
head.next.next.next = new Node("Saturn");

let current = head;

while (current !== null) {

    console.log(
        "Node:",
        current.value
    );

    current = current.next;
}


// ==========================================
// 8. STACK PROCESSING
// ==========================================

const stack = [
    "Task A",
    "Task B",
    "Task C",
    "Task D"
];

while (stack.length > 0) {

    const task = stack.pop();

    console.log(
        "Processing:",
        task
    );
}


// ==========================================
// 9. GAME LOOP
// ==========================================

let gameRunning = true;
let frame = 0;

while (gameRunning && frame < 10) {

    frame++;

    console.log(
        "Game Frame:",
        frame
    );

    // Simulate game ending
    if (frame === 10) {
        gameRunning = false;
    }
}

console.log("Game loop ended.");


// ==========================================
// 10. HEAP SORT EXTRACTION
// ==========================================

const heap = [
    100,
    80,
    90,
    50,
    60,
    70
];

const sorted = [];

while (heap.length > 0) {

    // Find largest value
    let largestIndex = 0;
    let j = 1;

    while (j < heap.length) {

        if (heap[j] > heap[largestIndex]) {
            largestIndex = j;
        }

        j++;
    }

    // Remove largest
    const largest =
        heap.splice(largestIndex, 1)[0];

    sorted.push(largest);
}

console.log(
    "Sorted:",
    sorted
);
