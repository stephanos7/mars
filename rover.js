//the rover object
var myRover = {
  position : [0, 0],
  direction : "N"
};

//planet grid
var marsGrid = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

//command to move forward
var f = function(rover){
  switch(rover.direction){
    case "N" : rover.position[1]++;
    break;
    case "S" : rover.position[1]--;
    break;
    case "E" : rover.position[0]++;
    break;
    case "W" : rover.position[0]--;
    break;
    default  :
    console.log("I don't recognise this direction");
  }
  /*console.log("The vehicle has moved into position :[" + rover.position[0] + ", " + rover.position[1] + "] ");*/

};

//command to move backwards
var b = function(rover){
  switch(rover.direction){
    case "N" : rover.position[1]--;
    break;
    case "S" : rover.position[1]++;
    break;
    case "E" : rover.position[0]--;
    break;
    case "W" : rover.position[0]++;
    break;
    default  :
    console.log("I don't recognise this direction");
  }
  /*console.log("The vehicle has moved into position :[" + rover.position[0] + ", " + rover.position[1] + "] ");*/

};

//command to face left
var l = function(rover){
    rover.direction = "W";
    console.log("The vehicle is facing at a new direction : " + rover.direction);

};

//command to face right
var r = function(rover){
    rover.direction = "E";
    console.log("The vehicle is facing at a new direction : " + rover.direction);

};


//obstacles' positions following recent meteor showers
var collisionCoordinates = [[9,6],[6,9],[0,4]];


//prompting the user for instructions
var ins = prompt();

//looping through the users sequence of instruction letters
for (i = 0; i < ins.length; i++){

//checking for applicable commands and exectuing accordingly
  if(ins[i] === "f"){
    f(myRover);
  }else if(ins[i] === "b"){
    b(myRover);
  }else if(ins[i] === "l"){
    l(myRover);
  }else if(ins[i] === "r"){
    r(myRover);
  }

  //wrapping around the planet grid when reaching the borders
    if(myRover.position[1] < 0){
      myRover.position[1] = 10;
    }
    if(myRover.position[1] > 10){
      myRover.position[1] = 0;
    }
    if(myRover.position[0] < 0){
      myRover.position[0] = 10;
    }
    if(myRover.position[0] > 10){
      myRover.position[0] = 0;
    }

  //checking for obstacles on the surface...

  for(var a = 0; a < collisionCoordinates.length; a++){
    obstacle = collisionCoordinates[a];
    if(obstacle[0] === myRover.position[0] && obstacle[1] === myRover.position[1]){
      console.log("Danger we've hit a meteor!!!!!!");
      break;
    }
  }


//breaking and surfacing error to user whilst logging rover's last position
  if(ins[i] !== "f" && ins[i] !== "b" && ins[i] !== "l" && ins[i] !== "r" ){
    console.log("Error 1!!!!!! Rover could move any further, command number " + [i + 1] + ", " + "\"" + ins[i] + "\"" +  " is not recognised");
    console.log("\n");
    console.log("Rover has stopped at position: " + myRover.position);
    console.log("Please review your array of instructions: " + ins);
    break;

//else success message and logging of final position
  }else{
  console.log("The vehicle has successfully reached position: " + myRover.position + " following your commands");
  }
}
