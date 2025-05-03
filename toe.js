let reset = document.querySelector("#reset");
let boxes = document.querySelectorAll(".Box");
let newGameBtn = document.querySelector("#newbutton");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 =  true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
];

const resetGame = () => 
{
    turn0 = true;
    enableboxes();
    msgcont.classList.add("hide"); 
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){
            box.innerText ="O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    }); 
});

const disablebutton = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () =>
{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `CONGRATULATION , Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebutton();
} 

const checkWinner = () => {
    for(let pattern of winPattetoh rns){
        // array of pattern aayega

        // console.log(pattern);


        // position of pattern yani kaun se position like 0,1,2 mein kon sa value h win vala 

        // console.log(pattern[0], pattern[1], pattern[2]);


        // uss box mein x,o mein se kon sa value h

        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);


        // .innertext use krege box ke under kuch likhne ke liye


        // value tino indexes pr same h ya ni iske liye 

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner !!!",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);