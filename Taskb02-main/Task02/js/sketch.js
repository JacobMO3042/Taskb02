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
            let ranNum = Math.floor(random(4)) //rounds the random to a whole to then pull as a case
            switch(ranNum){ //switch is a case
                case 0 : arc(x, y, CELL_SIZE * 2, CELL_SIZE * 2, 0, HALF_PI); //the x and y isnt a cell like a table the cell size gives the illusion of it being a grid by having uniform spacing
                break;
                case 1 : arc(x + CELL_SIZE , y, CELL_SIZE * 2, CELL_SIZE * 2, HALF_PI, PI); //cell size moves the position along, so X would be left corner but X + Cell will move to right corner
                break
                case 2 : arc(x + CELL_SIZE, y + CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2, PI, PI + HALF_PI  )
                break
                case 3 : arc(x, y + CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2, PI + HALF_PI, 0 )
            }
            
;            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x=0;
        
    }

}

function draw() {

}
