function setup() {

    colours = [color('#303881'),color('#d4391d'), color('#e9c009'), color('#f1edec')];
    createCanvas(800, 800);
    // background(255);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){ 
            fill(50)
            rect(x,y, CELL_SIZE, CELL_SIZE);
            fill(random(colours))  
            let ranNum = Math.floor(random(2)) //rounds the random to a whole to then pull as a case
            switch(0){ //switch is a case
                case 0 : triangle(x, y, x, y + CELL_SIZE, x+ CELL_SIZE, y+ CELL_SIZE); //the x and y isnt a cell like a table the cell size gives the illusion of it being a grid by having uniform spacing
                break;
                case 1 : triangle(x, y , x + CELL_SIZE , CELL_SIZE + y, x +CELL_SIZE, y); //cell size moves the position along, so X would be left corner but X + Cell will move to right corner
                break
                case 2 : triangle(x, y, x, y + CELL_SIZE, x + CELL_SIZE, y)
                break
                case 3 : arc(x, y + CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2, PI + HALF_PI, 0 )
            }
            
;            x+=CELL_SIZE; //x plus cell size
        }
        y+=CELL_SIZE; // y plus cell size
        x=0; // set to zero when going down y value
        
    }

}

function draw() {

}
