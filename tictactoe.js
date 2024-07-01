let btn = document.querySelectorAll(".box");
let symbol_O = true;
const win = [[0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]];
             
let reset = document.querySelector("#Reset");    

let newgame = document.querySelector(".newgame");

let clickTimes= 0;

let winnermsg = document.querySelector("#winnermsg");

let Draw = document.querySelector(".draw");

let newGame_btn = document.querySelector(".newgame_btn");

let winner_found = false;

const winner = () => {
    for(let pattern of win){
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                newgame.classList.remove("hide");
                newGame_btn.classList.remove("hide");
                winner_found = true;
                reset.disabled = true;
                winnermsg.innerText = "\nCONGRATULATIONS !\n\n\nWinner is " + pos1val + "\n\n\n";
                btn.forEach((button)=>{
                    button.disabled = true;
                })
            }
        }
    }
};

btn.forEach((button) => {
    button.addEventListener("click",()=>{
        console.log("But ton was clicked");
        if(symbol_O){
            button.style.color = "red";
            button.textContent = "O";
            symbol_O = false;
        }
        else{
            button.textContent = "X";
            symbol_O = true;
        }
        button.disabled = true;
        clickTimes++;
        winner();
        if(clickTimes===9 && winner_found === false){
            Draw.classList.remove("hide");
            newGame_btn.classList.remove("hide");
            reset.disabled = true;
        }
    });
});


reset.addEventListener("click",()=>{
    btn.forEach((button)=>{
        button.disabled = false;
        button.textContent = " ";
    })
    symbol_O = true;
    clickTimes = 0;
    winner_found = false;
    // newGame_btn.classList.add("hide");
})


const newGame = ()=>{
    btn.forEach((button)=>{
        button.disabled = false;
        button.textContent = " ";
    })
    symbol_O = true;
    newgame.classList.add("hide");
    Draw.classList.add("hide");
    clickTimes = 0;
    winner_found = false;
    symbol_O = true;
    newGame_btn.classList.add("hide");
    reset.disabled = false;
};

// newgame.addEventListener("click",newGame);

newGame_btn.addEventListener("click", newGame);