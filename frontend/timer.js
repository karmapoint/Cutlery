class Timer {
  constructor(){
    this.counter = 60;
    this.counting = false;
  }

  startTimer(){
    this.counting = true;
    this.countdown();
  }

  countdown(){
    $(".timer").html(this.counter);
    let ticking = setInterval(() => {
      if (this.counting) {
        this.counter--;
      }
      $(".timer").html(this.counter);
      if (this.counter <= 0) {
        clearInterval(ticking);
        document.getElementsByClassName('transparentModal')[0].style.display = "flex";
          document.getElementById("gameOver").style.display = "flex";
          clearInterval(ticking);
          this.counting = false;
      }
    }, 1000);

  }

  pauseTimer(){
    this.counting = false;
  }

  resetTimer(){
    this.counter = 60;
  }

}
module.exports = Timer;
