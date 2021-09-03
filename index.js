import { Snake } from './snake';
import { generateFood,eat } from './food';
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const canvasHeight = 200;
const canvasWidth = 200;
const snake = new Snake(canvasHeight, canvasWidth);




let food = generateFood(canvasHeight, canvasWidth, snake);
let speed=1000;
let interval=null;
document.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key == 'ArrowLeft'   && snake.dx!=1) {
    //left arrow
    snake.dx = -1;
    snake.dy = 0;
  } else if (event.key == 'ArrowUp' && snake.dy!=1) {
    //up arroe
    snake.dx = 0;
    snake.dy = -1;
  } else if (event.key == 'ArrowRight' && snake.dx!=-1) {
    //right arrow
    snake.dx = 1;
    snake.dy = 0;
  } else if (event.key == 'ArrowDown' && snake.dy!=-1) {
    // down arrow
    snake.dx = 0;
    snake.dy = 1;
  }

});

function update() {
  snake.update(canvas);
  if(snake.dead()){
    console.log('game over');
  }
  if(eat(food,snake)){
   food=generateFood(canvasHeight, canvasWidth, snake);
   snake.grow();
  }

}
function show() {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  canvas.fillStyle = 'red';
  canvas.fillRect(food.x, food.y, snake.width, snake.height);
  snake.show(canvas);

}
setInterval(() => {
  update();
  show();
}, 200);
