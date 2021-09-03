export function generateFood(canvasWidth,canvasHeight,snake){
  const x=Math.floor(Math.random()*(canvasWidth/snake.width))*snake.width;
  const y=Math.floor(Math.random()*(canvasHeight/snake.height))*snake.height;
  return {x, y};
}

export function eat(food,snake){
  let result=false;
  if(food.x==snake.x&&food.y==snake.y){
    result = true;
  }
  return result;
}