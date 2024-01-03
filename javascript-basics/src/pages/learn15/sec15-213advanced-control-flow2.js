function moveCommand(direction) {
  var whatHappen;
  switch (direction) {
    case "forward":
      //break; //เกิด undefined
      whatHappen = "you encounter a meter";
      break;
    case "back":
      whatHappen = "you arrived home";
      break;
    case "right":
      whatHappen = "you found a river";
      break;
    case "left":
      whatHappen = "you run into a troll";
      break;
    default:
      whatHappen = "please enter a valid direction";
  }
  console.log(whatHappen);
  return whatHappen;
}

moveCommand("forward");
moveCommand("back");
moveCommand("right");
moveCommand("left");
moveCommand();
