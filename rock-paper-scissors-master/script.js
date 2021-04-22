const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const rest = document.getElementById('rest');
const ruleForm = document.getElementById('ruleForm');
const ruleButton = document.getElementById('ruleButton');
const closeRule = document.getElementById('close-rule');


const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;
let yourSelection = undefined;
let paper = "<div><h2>You Picked</h2><button class=\"btn-circle btn-paper\"><span class=\"wraper\"><img src=\"./images/icon-paper.svg\" alt=\"paper icon\"></span></button></div>";
let rock = "<div><h2>You Picked</h2><button class=\"btn-circle btn-rock\"><span class=\"wraper\"><img src=\"./images/icon-rock.svg\" alt=\"rock icon\"></span></button></div>";
let scissors = "<div><h2>You Picked</h2><button class=\"btn-circle btn-scissors\"><span class=\"wraper\"><img src=\"./images/icon-scissors.svg\" alt=\"scissors icon\"></span></button></div>";

let comSelection = undefined;
let comPaper = "<div><h2>The House Picked</h2><button class=\"btn-circle btn-paper\"><span class=\"wraper\"><img src=\"./images/icon-paper.svg\" alt=\"paper icon\"></span></button></div>";
let comRock = "<div><h2>The House Picked</h2><button class=\"btn-circle btn-rock\"><span class=\"wraper\"><img src=\"./images/icon-rock.svg\" alt=\"rock icon\"></span></button></div>";
let comScissors = "<div><h2>The House Picked</h2><button class=\"btn-circle btn-scissors\"><span class=\"wraper\"><img src=\"./images/icon-scissors.svg\" alt=\"scissors icon\"></span></button></div>";

let playAgin = undefined;
let win = "<div><p class=\"big-text\">You Win</p></div>";
let lose = "<div><p class=\"big-text\">You lose</p></div>";
let draw = "<div><p class=\"big-text\">It's a draw</p></div>";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();
    });
});
ruleButton.addEventListener('click', () => {
    main.style.display = 'none';
    selection.style.display = 'none';
    rest.style.display = 'none';
    ruleForm.style.display = 'inherit';
});

closeRule.addEventListener('click', () => {
    main.style.display = 'flex';
    ruleForm.style.display = 'none';
    selection.innerHTML = "";
});

rest.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
    ruleForm.style.display = 'none';
    selection.innerHTML = "";
    rest.style.display = 'none';
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice){
        playAgin = draw;
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock')
        ||
        (userChoice === 'rock' && computerChoice === 'scissors')
        ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        updateScore(1);
        playAgin = win;
    } else {
        updateScore(-1);
        playAgin = lose;
    }
    if (userChoice === 'paper'){
        yourSelection = paper;
    } else if (userChoice === 'rock'){
        yourSelection = rock;
    } else {
        yourSelection = scissors;
     }
     if (computerChoice === 'paper'){
        comSelection = comPaper;
    } else if (computerChoice === 'rock'){
        comSelection = comRock;
    } else {
        comSelection = comScissors;
     }
    selection.innerHTML += yourSelection;
    selection.innerHTML += playAgin;
    selection.innerHTML += comSelection;
    main.style.display = 'none';
    selection.style.display = 'flex';
    rest.style.display = 'flex';
    ruleForm.style.display = 'none';
}

function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
}
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}