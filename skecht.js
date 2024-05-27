function setup() {
    createCanvas(650, 400);
    background("black")
  }
  
   
   function draw() {
  
  
  
  
    stroke("red")
    fill("pink")
    
    //console.log(mouseIsPressed)
      
    if(mouseIsPressed) {
      rect(mouseX,mouseY,50,-4);
    }
  }