
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sudoku Algorithm Game</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;
    background: #101820;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    color: #f5c542;
}

.game {
    max-width: 520px;
    margin: auto;
}

#board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    width: 100%;
    aspect-ratio: 1;
    border: 3px solid #f5c542;
}

.square {
    border: 1px solid #52616b;
    background: #1d2b36;
    color: white;
    font-size: clamp(16px, 5vw, 25px);
    text-align: center;
    width: 100%;
    min-width: 0;
    outline: none;
}

.square:focus {
    background: #34495e;
}

.square:nth-child(3n) {
    border-right: 3px solid #f5c542;
}

.square:nth-child(9n) {
    border-right: none;
}

.square:nth-child(n+19):nth-child(-n+27),
.square:nth-child(n+46):nth-child(-n+54) {
    border-bottom: 3px solid #f5c542;
}

.fixed {
    color: #f5c542;
    font-weight: bold;
}

.controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
}

button {
    background: #f5c542;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background: white;
}

#numbers button {
    width: 42px;
}

#status {
    color: #54e39a;
    min-height: 24px;
}
</style>
</head>

<body>

<div class="game">
    <h1>Sudoku Algorithm Lab</h1>
    <p>Fill every row, column, and 3×3 square with numbers 1–9.</p>

    <div id="board"></div>

    <div id="numbers" class="controls"></div>

    <div class="controls">
        <button onclick="checkBoard()">Check</button>
        <button onclick="solveSudoku()">Solve</button>
        <button onclick="newGame()">New Game</button>
        <button onclick="resetGame()">Reset</button>
    </div>

    <h3 id="status">Select a square and a number.</h3>
</div>

<script>

// Sudoku puzzle: 0 represents an empty square.
const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

// Original and working boards.
let square = puzzle.map(row => [...row]);
let original = puzzle.map(row => [...row]);

let selectedSquare = null;

// Create the 81 Sudoku squares.
function createBoard() {

    const board = document.getElementById("board");
    board.innerHTML = "";

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            const cell = document.createElement("input");

            cell.className = "square";
            cell.type = "text";
            cell.inputMode = "numeric";
            cell.maxLength = 1;

            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.value = square[row][col] || "";

            if (original[row][col] !== 0) {
                cell.classList.add("fixed");
                cell.readOnly = true;
            }

            cell.addEventListener("click", () => {
                selectedSquare = { row, col };
                highlightSquare(cell);
            });

            cell.addEventListener("input", () => {

                let value = cell.value;

                if (!/^[1-9]$/.test(value)) {
                    cell.value = "";
                    return;
                }

                fillSquare(row, col, Number(value));
            });

            board.appendChild(cell);
        }
    }
}

// Select and highlight a square.
function highlightSquare(cell) {

    document.querySelectorAll(".square").forEach(el => {
        el.style.background = "#1d2b36";
    });

    cell.style.background = "#52616b";
}

// FillSquare function.
function fillSquare(row, col, value) {

    if (original[row][col] !== 0) return;

    if (isValid(square, row, col, value)) {

        square[row][col] = value;

        document.getElementById("status").textContent =
            "Number " + value + " placed successfully!";

    } else {

        square[row][col] = 0;

        document.getElementById("status").textContent =
            "Invalid move! Check row, column, and 3×3 square.";
    }
}

// Validate Sudoku rules.
function isValid(board, row, col, num) {

    for (let i = 0; i < 9; i++) {

        if (i !== col && board[row][i] === num)
            return false;

        if (i !== row && board[i][col] === num)
            return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {

        for (let c = startCol; c < startCol + 3; c++) {

            if ((r !== row || c !== col) &&
                board[r][c] === num) {
                return false;
            }
        }
    }

    return true;
}

// Create number selection buttons.
function createNumbers() {

    const container = document.getElementById("numbers");

    for (let n = 1; n <= 9; n++) {

        const button = document.createElement("button");

        button.textContent = n;

        button.onclick = () => {

            if (!selectedSquare) {
                document.getElementById("status").textContent =
                    "Select a square first!";
                return;
            }

            const { row, col } = selectedSquare;

            if (original[row][col] === 0) {
                fillSquare(row, col, n);
                renderBoard();
            }
        };

        container.appendChild(button);
    }
}

// Render updated board.
function renderBoard() {
    createBoard();
}

// Check whether the puzzle is complete.
function checkBoard() {

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            if (square[row][col] === 0) {
                document.getElementById("status").textContent =
                    "Puzzle incomplete!";
                return;
            }

            const value = square[row][col];

            square[row][col] = 0;

            if (!isValid(square, row, col, value)) {
                square[row][col] = value;

                document.getElementById("status").textContent =
                    "There are incorrect numbers!";
                return;
            }

            square[row][col] = value;
        }
    }

    document.getElementById("status").textContent =
        "Congratulations! Sudoku solved!";
}

// Backtracking Sudoku solver.
function solveSudoku() {

    if (solve(square)) {
        renderBoard();

        document.getElementById("status").textContent =
            "Sudoku solved using backtracking!";
    }
}

// Recursive backtracking algorithm.
function solve(board) {

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            if (board[row][col] === 0) {

                for (let num = 1; num <= 9; num++) {

                    if (isValid(board, row, col, num)) {

                        board[row][col] = num;

                        if (solve(board)) {
                            return true;
                        }

                        board[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}

// Reset to original puzzle.
function resetGame() {

    square = original.map(row => [...row]);

    renderBoard();

    document.getElementById("status").textContent =
        "Board reset!";
}

// Start a new puzzle.
function newGame() {

    const puzzles = [
        [
            [0,0,0,2,6,0,7,0,1],
            [6,8,0,0,7,0,0,9,0],
            [1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0],
            [0,0,4,6,0,2,9,0,0],
            [0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4],
            [0,4,0,0,5,0,0,3,6],
            [7,0,3,0,1,8,0,0,0]
        ]
    ];

    original = puzzles[Math.floor(Math.random() * puzzles.length)]
        .map(row => [...row]);

    square = original.map(row => [...row]);

    selectedSquare = null;

    renderBoard();

    document.getElementById("status").textContent =
        "New Sudoku puzzle loaded!";
}

// Initialize project.
createBoard();
createNumbers();

</script>

</body>
</html>
