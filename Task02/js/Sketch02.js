function setup() {

    colours = [color('#303881'),color('#d4391d'), color('#e9c009'), color('#f1edec')];
    createCanvas(800, 800);
    
    const CELL_SIZE = 120;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){ 
            fill(random(colours)) // colours the cell to random (colouring the half that isnt a triangle)
            rect(x,y, CELL_SIZE, CELL_SIZE);
            fill(random(colours))  // colours the triangle
            let ranNum = Math.floor(random(4))
            switch(ranNum){ 
                case 0 : triangle(x, y, x, y + CELL_SIZE, x+ CELL_SIZE, y+ CELL_SIZE); 
                break;
                case 1 : triangle(x, y , x + CELL_SIZE , CELL_SIZE + y, x +CELL_SIZE, y); 
                break
                case 2 : triangle(x, y, x, y + CELL_SIZE, x + CELL_SIZE, y)
                break
                case 3 : triangle(x + CELL_SIZE, y+ CELL_SIZE, x, y + CELL_SIZE, x + CELL_SIZE, y)
            }
            
;            x+=CELL_SIZE; //x plus cell size
        }
        y+=CELL_SIZE; // y plus cell size
        x=0; // set to zero when going down y value
        
    }

}

function draw() {

}
