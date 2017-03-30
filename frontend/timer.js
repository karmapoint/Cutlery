class Timer {
  constructor(){
    this.counter = 60;
    this.counting = false;
  }

  startTimer(){
    if (this.counting === false){
      this.counting = true;
      this.countdown();
    }
  }

  countdown(){
    $(".timer").html(this.counter);
    let ticking = setInterval(() => {
      $(".timer").html(this.counter);
      this.counter--;
      if (this.counter < 0) {
        clearInterval(ticking);
        alert("Game Over!");
      }
    }, 1000);


  }

  pauseTimer(){
    this.counting = false;

  }

}
module.exports = Timer;
