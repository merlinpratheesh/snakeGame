

export function Snake(canvasWidth,canvasHeight) {
  this.x = 0;
  this.y = 0;
  this.dx = 1;
  this.dy = 0;
  this.width = 10;
  this.height = 10;
  this.tail=[];
  this.grow = function(){
    this.tail.push({x:this.x,y:this.y})
  }
  this.dead=function(){
    for(let i=0; i<this.tail.length; i++){
if(this.tail[i].x == this.x && this.tail[i].y==this.y){
  this.tail=[];
  return true;
}
    }
    return false;
  }
  this.update = function() {
    let x = this.x + this.width * this.dx;
    let y = this.y + this.height * this.dy;

  
    if(x<0){
      x=canvasWidth-this.width;
    }else if(x>canvasWidth-this.width){
    x=0;
    }

    if(y<0){
      y=canvasHeight-this.height;
    }else if(y>canvasHeight-this.height){

    y=0;
    }
    for(let i=0;i<this.tail.length-1;i++){
      this.tail[i]=this.tail[i+1];
    }
    this.tail[this.tail.length-1]={x:this.x, y:this.y};
    this.x=x;
    this.y=y;


    
  };

  this.show = function(canvas) {

    canvas.fillStyle = 'white';
    canvas.fillRect(this.x, this.y, this.width, this.height);

    for(let i=0; i<this.tail.length;i++){
      canvas.fillRect(this.tail[i].x+2, this.tail[i].y+2,this.width-4,this.height-4);
    }
  }
}