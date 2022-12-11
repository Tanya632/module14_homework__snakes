let field = document.createElement ('div');
document.body.appendChild(field);//поле
field.classList.add('field');

for (let i=0; i<100; i++) {     //разбили поле на квадратики
let excel = document.createElement('div'); //каждый квадратик  
    field.appendChild(excel);
    excel.classList.add('exceles');
    
}

let x = 1;
    y = 10;
let excel = document.getElementsByClassName('exceles');
    


for (let i = 0; i<excel.length; i++) {
if (x > 10) {
    x = 1;
    y --;
 }
   excel[i].setAttribute('posX', x);  // координаты каждой ячейки
   excel[i].setAttribute('posY', y);
   x++;
}    

function coordinatS() {
    let posX = Math.round(Math.random() * (10-3) + 3);
    let posY = Math.round(Math.random() * (10-1) + 1);
    return[posX, posY];
    
}
//змейка
let coordinatSnake = coordinatS();
let snake = [document.querySelector('[posX = "' + coordinatSnake[0]+ '"][posY = "'+ coordinatSnake [1] +'"]'),
document.querySelector('[posX = "' + (coordinatSnake[0]-1)+ '"][posY = "'+ coordinatSnake[1] +'"]'),
document.querySelector('[posX = "' + (coordinatSnake[0]-2)+ '"][posY = "'+ coordinatSnake[1] +'"]')];
    for (let i = 0; i < snake.length; i++) {
    snake[i].classList.add('snake');
}
   

// яблоко 
function createApple() {
    function  CoordinatA() {
        let posX = Math.round(Math.random() * (10-3) + 3);
        let posY = Math.round(Math.random() * (10-1) + 1);
        return[posX, posY];
   }

let CoordinatApple =  CoordinatA();
let apple = document.querySelector('[posX = "' + CoordinatApple[0] + '"][posY = "'+ CoordinatApple[1] +'"]');

    while(apple.classList.contains('snake')) {
        let CoordinatApple = CoordinatA();
        let apple = document.querySelector('[posX = "' + CoordinatApple[0]  + '"][posY = "'+ CoordinatApple[1] +'"]');
        }
         apple.classList.add('apple');
}

createApple(); 

//движение змейки 
let  direction = 'down';
let steps = false;


   function move() {
    let headSnake = 
    [snake[0].getAttribute('posX'), snake[0].getAttribute('posY')];
    snake[snake.length-1].classList.remove('snake');
    snake.pop();
    switch(direction) {
        case 'right':
           if(headSnake[0] >10){
            snake.unshift(document.querySelector('[posX="'+ (+ headSnake[0] +1) +'"][posY = "'+ headSnake[1] +'"]'));
        } else {
        snake.unshift(document.querySelector('[posX="1"][posY = "'+ headSnake[1] +'"]'));}  
            break;
        case 'left':
            if(headSnake[0] <1){
                snake.unshift(document.querySelector('[posX="'+ (+ headSnake[0] -1) +'"][posY = "'+ headSnake[1] +'"]'));
        } else {
               snake.unshift(document.querySelector('[posX="10"][posY = "'+ headSnake[1] +'"]'));}  
            break;
        case 'up':
            if(headSnake[1] >10){
                snake.unshift(document.querySelector('[posX="'+ headSnake[0] +'"][posY = "'+ (+headSnake[1] +1)+'"]'));
           } else {
               snake.unshift(document.querySelector('[posX="'+ headSnake[0] +'"][posY = "1"]'));}  
            break;
        case 'down':
            if(headSnake[1] <1){
                snake.unshift(document.querySelector('[posX="'+ headSnake[0] +'"][posY = "'+ (+headSnake[1] -1)+'"]'));
           } else {
               snake.unshift(document.querySelector('[posX="'+ headSnake[0] +'"][posY = "10"]'));} 
            break;        
    }
    if
    (snake[0].getAttribute('posX') ==apple.getAttribute('posX') &&
    snake[0].getAttribute('posY')== apple.getAttribute('posY')) 
    {                                         // змейка ДОЛЖНА по идее есть
    apple.classList.add('apple');
    createApple();
    }
    
    for (let i = 0; i < snake.length; i++) {
        snake[i].classList.remove('snake');
    }
    steps = true;
}
let interVal = setInterval(move,500)


//нажатие клавиш
window.addEventListener('keydown', function (e) {
    if(steps==true){
        if (e.keyCode == 37 && direction !='right') {
            direction = 'left'; //лево
            steps = false;
        }
        if (e.keyCode == 38 && direction !='down') {
            direction = 'up'; //право
            steps = false;
        }
        if (e.keyCode == 39 && direction !='left') {
            direction = 'right'; // верх
            steps = false;
        }
        if (e.keyCode == 40 && direction !='up') {
            direction = 'down'; // низ
            steps = false;
        }}
});

  /////////////  НЕ ПОЛУЧАЕТСЯ У МЕНЯ( ////////////








