window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var countDownDate = new Date().getTime() + 2 * 60 * 1000;

        var countdown = setInterval(function() {
            var currentTime = new Date().getTime();
            var distance = countDownDate - currentTime;

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " left" ;

            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("timer").textContent = "Time's up!";
            }
        }, 1000);
        function reloadPage() {
            location.reload();
          }
      
          var retryButton = document.getElementById("retryButton");
          retryButton.addEventListener("click", reloadPage);
        
          function blurContainer() {
            var container = document.getElementById("box");
            container.classList.add("blur");
          }
      
          var timeLimit = 1000*60*2;
      
          setTimeout(blurContainer, timeLimit);