let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");
const gencompchoice=()=>{
const option=["rock","paper","Scissor"];
const randidx=Math.floor(Math.random()*3);
return option[randidx];

}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game draw";
    msg.style.backgroundColor="#A471DE";
}
const showwinner=(userwin ,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;

        compscorepara.innerText=computerscore;
        console.log("you lose");
        msg.innerText=`you lose ${compchoice} beat ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame=(userchoice)=>{
console.log("user choice = ",userchoice);
//generate computer choice
const compchoice=gencompchoice();
console.log("user choice = ",compchoice);
if(compchoice===userchoice){
    //draw game
    drawgame();
}
else{
    let userwin=true;
    if(userchoice === "rock"){
        //scissor,paper
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper"){
        // rock ,Scissor
      userwin=  compchoice==="scissors"?false:true;
    }
    else{
        //rock,paper
        userwin=  compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}


}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
  
    const userchoice=choice.getAttribute("id");

    playgame(userchoice);
    
})
})