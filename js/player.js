class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
  }
  addPlayer() {

    //Placing the players

    if (this.index === 1) {
      this.positionX = width / 2 - 320;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 150;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 150;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 320;
    }

    //Create a database query to add player in the database.
  }

   //Update the count of players in the database 
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  
}
