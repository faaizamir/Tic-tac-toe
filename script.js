console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;


//Function to Change Turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

//Function to check for a Win
const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2, 4, 4, 0],
        [3, 4, 5, 4, 12, 0],
        [6, 7, 8, 4, 20, 0],
        [0, 3, 6, -4, 12, 90],
        [1, 4, 7, 4, 12, 90],
        [2, 5, 8, 12, 12, 90],
        [0, 4, 8, 4, 12, 45],
        [2, 4, 6, 4, 12, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won";
            isgameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "16vw";
            gameOver.play();
        }        
    })
}

// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";

})