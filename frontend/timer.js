class Timer {
  constructor(){
    this.counter = 60;
    this.counting = false;
  }

  startTimer(){
    this.countdown();
  }

  countdown(){
    $(".timer").html(this.counter);
    let ticking = setInterval(() => {
      this.counter--;
      $(".timer").html(this.counter);
      if (this.counter <= 0) {
        clearInterval(ticking);
        alert("Game Over!");
      }
    }, 1000);

  }


  resetTimer(){
    this.counter = 60;
  }

}
module.exports = Timer;
