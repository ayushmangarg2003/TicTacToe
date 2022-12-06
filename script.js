let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
}

const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerHTML = "";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
}

const winFunction = (letter) => {
    disableButtons();
    if(letter == 'X'){
        msgRef.innerHTML = "&#x1f389; <br> 'X' Wins";
    }else{
        msgRef.innerHTML = "&#x1f389; <br> 'O' Wins";
    }
};

const DrawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1f389; <br> Its a Draw";
};

newGameBtn.addEventListener("click" , () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener('click' , () => {
    count = 0;
    enableButtons();
})

const winchecker = () => {
    for (let i of winpattern){
        let [element1 , element2 , element3] = [
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML,     ];
        if (element1 != "" && (element2 != "") & (element3 != "")){
            if (element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }

}
btnRef.forEach((element) => {
    element.addEventListener("click" , () => {
        if(xTurn){
            xTurn = false
            element.innerHTML = 'X'
            element.disabled = true
        }else{
            xTurn = true
            element.innerHTML = 'O'
            element.disabled = true
        }
        count+=1
        if (count == 9){
            DrawFunction();
        }
        winchecker();
    });
});

window.onload = enableButtons();