let title = document.querySelector(".title");
let turn = "x";
let squares = [];
let gameOver = false;
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById("block" + num1).style.background = "#000";
  document.getElementById("block" + num2).style.background = "#000";
  document.getElementById("block" + num3).style.background = "#000";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function game(id) {
  if (gameOver) {
    return; 
  }
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = "O Turn";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "X Turn";
  }
  winner();
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`block${i}`).innerHTML;
  }
  //rows compare
  if (
    squares[1] == squares[2] &&
    squares[1] == squares[3] &&
    squares[2] != ""
  ) {
    end(1, 2, 3);
    gameOver = true;
  } else if (
    squares[4] == squares[5] &&
    squares[4] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6);
    gameOver = true;
  } else if (
    squares[7] == squares[8] &&
    squares[7] == squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 0);
    gameOver = true;
  }
  //cols compare
  else if (
    squares[1] == squares[4] &&
    squares[7] == squares[1] &&
    squares[1] != ""
  ) {
    end(1, 4, 7);
    gameOver = true;
  } else if (
    squares[2] == squares[5] &&
    squares[8] == squares[2] &&
    squares[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[9] == squares[3] &&
    squares[3] != ""
  ) {
    end(3, 6, 9);
    gameOver = true;
  }
  //Diagonal  compare
  else if (
    squares[3] == squares[5] &&
    squares[7] == squares[3] &&
    squares[3] != ""
  ) {
    end(3, 5, 7);
    gameOver = true;
  } else if (
    squares[1] == squares[5] &&
    squares[9] == squares[1] &&
    squares[1] != ""
  ) {
    end(1, 5, 9);
    gameOver = true;
  } else if (!squares.includes("")) {
    title.innerHTML = "Draw";
    gameOver = true;
    setInterval(function () {
      title.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  }
}
