let images=['assests/nono.png','assests/myPhoto.jpg']
let index=0;

const mainPhoto=document.querySelector(".MainLogo")
mainPhoto.addEventListener("click",()=>{mainPhoto.src=images[(++index)%2]})

const header=document.querySelector(".nitro")
const htmll=document.querySelector("html")

htmll.addEventListener("mousemove",()=>{
    if(Math.floor(Math.random()*2)==0)
    header.style.color="black"
    else
    header.style.color="white"
})