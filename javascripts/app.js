// Rover Object Goes Here
// ======================
var rover={
  direction:"N",
  x: 0,
  y: 0,
  travelLog: [],
}

var commandString="frffrfflfrff"
// ======================

function turnLeft(rover){
  console.log("current direction :" + rover.direction)
  console.log("turnLeft was called!");

  switch (rover.direction){
    case "N":
    rover.direction="W";
    break;

    case "W":
    rover.direction="S";
    break;

    case "S":
    rover.direction="E";
    break;

    case "E" :
    rover.direction= "N";
    break;
  }
  console.log("new direction :" + rover.direction);
  
}

function turnRight(rover){
  console.log("current direction : " + rover.direction);
  console.log("turnRight was called!");

  switch (rover.direction){
    case "N":
    rover.direction="E";
    break;

    case "W":
    rover.direction="N";
    break;

    case "S":
    rover.direction="W";
    break;

    case "E" :
    rover.direction= "S";
    break;
  }

  console.log("new direction :" + rover.direction);

}

function moveForward(rover){
  console.log("moveForward was called");
  console.log("current position : " + rover.x + rover.y );
  switch (rover.direction){
    case "N":{
      if(rover.y!=0 ){
        rover.y-=1;
      }
      break;
    }

    case "W":{
      if(rover.x!=0){
        rover.x-=1;
      }
      break;
    }
    case "S":{
      if(rover.y!=9 ){
        rover.y+=1;
      }
      break;
    }
    case "E":{
      if(rover.x!=9){
        rover.x+=1;
      }
      break;  
    }
}
rover.travelLog.push((rover.x,rover.y));

console.log("new coordinates" + rover.x + rover.y);

}

/*turnLeft(rover);
moveForward(rover);
turnLeft(rover); 
moveForward(rover);
turnLeft(rover);
moveForward(rover);*/

function command(commandString) {
  for(i=0;i<commandString.length; i++ ){
    switch (commandString[i]){
      case "r":{
        turnRight(rover);
        break;
      }

      case "f" :
        moveForward(rover);
        break;

      case "l":
        turnLeft(rover);
        break;

    }  
  }
}

command(commandString);
console.log(rover.travelLog);


