score=0;
cross=true;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown=function(e){
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode==38){
        car=document.querySelector('.car');
        car.classList.add('animateCar');
        setTimeout(() => {
            car.classList.remove('animateCar')
        },1000);
    }
    if(e.keyCode==39){
        car=document.querySelector('.car');
        carX=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
        car.style.left=carX + 112+ "px";
    }
    if(e.keyCode==37){
        car=document.querySelector('.car');
        carX=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
        car.style.left=(carX - 112)+ "px";
    }
}
setInterval(() =>{
    car=document.querySelector('.car');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    cx=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
    cy=parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX =Math.abs(cx-ox);
    offsetY =Math.abs(cy-oy);

    if(offsetX<257 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        
        audio.pause();
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
        },3000);
        car1=document.querySelector('.car1');
        car1.classList.add('animateCar1');

    }
    else if(offsetX< 145 && cross){
        score+=1;;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            console.log(aniDur);
            if(aniDur>1.9){
        newDur=aniDur - 0.1;
            }
        obstacle.style.animationDuration=newDur + 's';
        console.log(newDur);


        },5);
        
    }


},100);
function updateScore(score)
{
    scoreCount.innerHTML ="Your Score: " + score
}