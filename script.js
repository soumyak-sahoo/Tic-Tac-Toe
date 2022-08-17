console.log("Welcome to Tic Tac Toe");
let music  = new Audio('music.mp3');
let nextTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let turn = "X";
let isgameover = false;


const changeTurn = () => {
    return turn === "X"?"0": "X"
}


const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach((element) => {
        if ((boxtexts[element[0]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[2]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[element[0]].innerText + " is the winner"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "56px";
        }
    });

}


//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            nextTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})


reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info").innerText = "Turn of " + turn;
    // document.getElementsByClassName("imgbox").style.width = 0;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";
})