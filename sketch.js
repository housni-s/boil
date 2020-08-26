var rec1,rec2

function setup() {
  createCanvas(1200,800);
rec1= createSprite(800, 100, 50, 50);
rec2=createSprite(800,600,50,50)
rec1.velocityY=3
rec2.velocityY=-3
}

function draw() {
  background("black"); 
if(rec1.x-rec2.x<rec1.width/2+rec2.width/2 && rec2.x-rec1.x<rec2.width/2+rec1.width/2){
rec1.velocityX=rec1.velocityX*-1
rec2.velocityX=rec2.velocityX*-1
}

if(rec1.y-rec2.y<rec1.height/2+rec2.height/2 && rec2.y-rec1.y<rec2.height/2+rec1.height/2){
rec1.velocityY=rec1.velocityY*-1
rec2.velocityY=rec1.velocityY*-1
}  

 drawSprites();
}
