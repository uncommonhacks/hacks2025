document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('tetrisCanvas');
    const ctx = canvas.getContext('2d');
    const blockSize = 20;
    const columns = canvas.width / blockSize;
    const rows = canvas.height / blockSize;
    let board = Array.from({ length: rows }, () => Array(columns).fill(0));
    let currentPiece = null;

    const tetrominoes = [
        [[1, 1, 1, 1]], // I
        [[1, 1], [1, 1]], // O
        [[0, 1, 0], [1, 1, 1]], // T
        [[1, 1, 0], [0, 1, 1]], // Z
        [[0, 1, 1], [1, 1, 0]], // S
        [[1, 0, 0], [1, 1, 1]], // L
        [[0, 0, 1], [1, 1, 1]] // J
    ];

    function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
    }

    function spawnPiece() {
        const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        const startX = Math.floor(Math.random() * (columns - shape[0].length));
        currentPiece = { shape, x: startX, y: 0, color };

        if (collision()) {
            resetGame(); // Restart if a piece spawns in a blocked space
        }
    }

    function movePieceDown() {
        if (!currentPiece) return;
        currentPiece.y++;
        if (collision()) {
            currentPiece.y--;
            placePiece();
            spawnPiece();
        }
        render();
    }

    function placePiece() {
        currentPiece.shape.forEach((row, dy) => {
            row.forEach((cell, dx) => {
                if (cell) {
                    board[currentPiece.y + dy][currentPiece.x + dx] = currentPiece.color;
                }
            });
        });
    }

    function collision() {
        return currentPiece.shape.some((row, dy) => {
            return row.some((cell, dx) => {
                if (cell) {
                    let newY = currentPiece.y + dy;
                    let newX = currentPiece.x + dx;
                    if (newY >= rows || board[newY][newX]) {
                        return true;
                    }
                }
                return false;
            });
        });
    }

    function resetGame() {
        board = Array.from({ length: rows }, () => Array(columns).fill(0));
        spawnPiece();
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        board.forEach((row, y) => row.forEach((color, x) => {
            if (color) drawBlock(x, y, color);
        }));
        if (currentPiece) {
            currentPiece.shape.forEach((row, dy) => {
                row.forEach((cell, dx) => {
                    if (cell) drawBlock(currentPiece.x + dx, currentPiece.y + dy, currentPiece.color);
                });
            });
        }
    }

    spawnPiece();
    setInterval(movePieceDown, 120);
});
