const image1=document.querySelector(".img1");
const image2=document.querySelector(".img2");
const h1 = document.querySelector("h1");

let rand1=Math.floor(Math.random()*6)+1;
let rand2=Math.floor(Math.random()*6)+1;

image1.src=`images/dice${rand1}.png`;
image2.src=`images/dice${rand2}.png`;

if(rand1>rand2)
{
    h1.textContent="player1 wins";
}
else if(rand2>rand1)
{
    h1.textContent="player2 wins";
}
else
{
   h1.textContent="draw";
}