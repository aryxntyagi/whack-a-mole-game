let currentmoletile;
let currentplanttile;
let score=0;
let gameover=false;
let moleInterval;
let plantInterval;


// window.onload=function()
// {
//     setgame();
// }

function setgame()
{
    for(let i=0;i<9;i++)
    {
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selecttile);
        document.getElementById('board').appendChild(tile);
        //insering 9 div tag inside board div tag

    }
    moleInterval=setInterval(setmole,1500);//calls setgame every 2000ms
    plantInterval=setInterval(setplant,1500);


}
function getrandomtile()
{
    let num=Math.floor(Math.random()*9);
    return num.toString();
}


function setmole()
{
    if(gameover)
    {
        return;
    }
    if(currentmoletile)
    {
        currentmoletile.innerHTML="";//to clear already spawnwd mole cleasr al the tags within this dov tag

    }
    let mole=document.createElement("img");
    mole.src="monty-mole.png";

    let num=getrandomtile();
    if(currentplanttile && currentplanttile.id==num)
    {
        return;
    }

    currentmoletile=document.getElementById(num);
    currentmoletile.appendChild(mole);

}

function setplant()
{
    if(gameover)
    {
        return;
    }
    if(currentplanttile)
    {
        currentplanttile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="piranha-plant.png";

    let num=getrandomtile();
    if(currentmoletile && currentmoletile.id==num)
    {
        return;
    }
    currentplanttile=document.getElementById(num);
    currentplanttile.appendChild(plant);

}

function selecttile()
{
    if(gameover)
    {
        
        return;
    }
    if(this==currentmoletile)
    {
        score+=10; 
        
        document.getElementById("score").innerText=score.toString();//update score


     }
     else if(this==currentplanttile)
     {
        document.getElementById("score").innerText="GAME OVER:"+score.toString();
        gameover=true;

     }
}



function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function login() {
    
    closeLoginPopup();
    startGame();
}

function startGame() {
    
    
    setgame();
}

function restartGame() {
    // Reset score and gameover status
    score = 0;
    gameover = false;

    // Clear the board
    document.getElementById('board').innerHTML = '';
    document.getElementById("score").innerText="";

    // Clear any existing intervals
    clearInterval(moleInterval);
    clearInterval(plantInterval);

    // Start the game again
    setgame();

    // Close the login popup if it's open
    closeLoginPopup();
}
