let count = 0;
let pts = []
class point{
  constructor(a,b){
    this.x = a;
    this.y = b;
  }
  
  drawPointWhite(){
    stroke(255);
    ellipse(this.x, this.y, 14, 14);
  }
  
  drawPointBlack(){
    stroke(0);
    ellipse(this.x, this.y, 14, 14);
  }
}

function setup() {
  createCanvas(640, 400);
  noStroke();
  background(0);
}

function draw() {
  background(0);
  
  if(pts.length == 4){
    strokeWeight(3);
    stroke(11, 224, 28);
    line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
    
    strokeWeight(3);
    stroke(224, 89, 11);
    line(pts[2].x, pts[2].y, pts[3].x, pts[3].y);
    
    let m1 = (pts[1].y - pts[0].y)/(pts[1].x - pts[0].x);
    let m2 = (pts[3].y - pts[2].y)/(pts[3].x - pts[2].x);
    
    let a = pts[0];
    let b = pts[1];
    let c = pts[2];
    let d = pts[3];
    
    let xx = ((d.y - m2*d.x) - (b.y - m1*b.x))/(m1 - m2);
    let yy = b.y - m1*b.x + m1*xx;
    
    stroke(229, 27, 27);
    ellipse(xx, yy, 14, 14);
    
  }
  
  for(let i=0; i<pts.length; i++){
      pts[i].drawPointWhite();
    }
}

function mousePressed() {
  
  if(count < 4 && !pointClicked(mouseX, mouseY)){
    let t = new point(mouseX, mouseY);
    pts.push(t);
    console.log(mouseX, mouseY);
    t.drawPointWhite();
    count += 1;
  }
  else{
    pointClicked(mouseX, mouseY);
  }
}//mouse pressed

function pointClicked(a, b){
  for(let i=0; i<pts.length; i++){
        let d = abs(pts[i].x - mouseX) + abs(pts[i].y - mouseY)
        if(d <= 14){
          count -= 1;
          pts[i].drawPointBlack();
          pts.splice(i, 1);
          return true;
        }
  }
  return false;
}// pointClicked
