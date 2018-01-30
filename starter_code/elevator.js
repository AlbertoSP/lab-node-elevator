class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval;
  }

  start() {
    //comprueba con el comprueba el floor y si esta en maxfloor no aumenta mas y baja
    this.interval = setInterval(() => {
      /* if (this.floor < this.MAXFLOOR && this.direction == "up") {
        
        this.floorUp()
      } else if(this.floor >= 0 && this.direction == "down") {
        this.floorDown()
        
      } */
      this.floorUp();
      this.update();
    }, 1000);
  }

stop() {}
update() {
  return this.log();
}
_passengersEnter() {}
_passengersLeave() {}
floorUp() {
  if (this.floor < this.MAXFLOOR && this.direction === 'up') {
    this.floor++;
  } else {
    this.direction = 'down';
    this.floorDown();
    
  }
}
floorDown() {
  if (this.floor > 0 && this.direction == 'down') {
    this.floor--;
  } else {
    this.direction = "up";
    this.floorUp();
  }
  
}
call() {}
log() {
  console.log(`Direction: ${this.direction} / Floor: ${this.floor}`);


}
}

module.exports = Elevator;