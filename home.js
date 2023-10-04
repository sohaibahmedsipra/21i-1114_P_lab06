// JavaScript code in home.js
document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    const currentPlayerDisplay = document.getElementById("current-player");
    const winnerDisplay = document.getElementById("winner");
    const resetButton = document.getElementById("reset");
  
    let currentPlayer = "X";
    let winner = null;
    let board = ["", "", "", "", "", "", "", "", ""];
  
    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          winner = currentPlayer=== "X" ? "O" : "X";
          winnerDisplay.textContent = winner;
          return true;
        }
      }
  
      return false;
    }
  
    function handleCellClick(event) {
      const cellIndex = event.target.id.split("-")[1];
      if (!winner && board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        currentPlayerDisplay.textContent = currentPlayer;
        if (!checkWin()) {
          winnerDisplay.textContent = "None";
        }
      }
    }
  
    cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });
  
    resetButton.addEventListener("click", function () {
      board = ["", "", "", "", "", "", "", "", ""];
      cells.forEach((cell) => {
        cell.textContent = "";
      });
      currentPlayer = "X";
      winner = null;
      currentPlayerDisplay.textContent = currentPlayer;
      winnerDisplay.textContent = "None";
    });
  });
  