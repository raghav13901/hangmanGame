var movies = ["avatar", "titanic", "avengers endgame","mother india","gandhi","pirates of the caribbean on stranger tides"];
var desc = [" This movie of James Cameron's broke box all office records, conventional wisdom said that the key reasons for the film's unprecedented success were its jaw-dropping visuals, excellent use of 3D, and the immersive setting of Pandora.", "On March 1, 1998, the film became the first movie to gross $1 billion, months after its release", "This Movie became the highest-grossing movie in history on July 21, 2019, after 89 days of release, and had become the second-highest-grossing movie worldwide 12 days after its initial release.","The first Indian movie nominated for Oscar","First indian movie to get oscar","This movie officially holds the record with a budget of $378.5 million. Hint:A film of Johnny depp"];
var randNo = Math.floor(Math.random() * movies.length );
var span = 0;
var alpha = [];
var play = true;
var wrongAlpha = [];
var rightAlpha = [];
var i = 0,
  j = 0,
  w = 0;
var s = "";
z: {

};

function start() {


  for (i = 0; i < movies[randNo].length; i++) {
    if (movies[randNo][i] == " ") {
      s += "<span class='space'>//</span>";
      span++;
    } else {
      s += "<span> </span>";
    }
  }
  $('.ans').html(s);
  $('.quest').html(desc[randNo]);
  var l = document.addEventListener("keypress", function(event) {
    event.key.toLowerCase();
    function allLetter() {
      var letters = /^[A-Za-z]+$/;
      if (event.key.match(letters)) {
        return true;
      } else {
        alert("Invalid Character " + event.key + " Enter!!!");
        return false;
      }
    }

    if ((alpha.indexOf(event.key) === -1)) {
      if ((play == true) && allLetter()) {
        alpha.push(event.key);
        if ((movies[randNo].indexOf(event.key) != -1) && rightAlpha.indexOf(event.key) == -1) {
          rightAlpha.push(event.key);
          for (i = 0; i < movies[randNo].length; i++) {
            if ((event.key).toUpperCase() == (movies[randNo][i]).toUpperCase()) {
              $(".ans span")[i].innerHTML = (event.key).toUpperCase();
              span++;
            }
          }
          if (span === movies[randNo].length) {
            $(".quest").html("You Won!!! <br> Refresh to play again");
            play = false;
          }
        } else {
          if (wrongAlpha.indexOf(event.key) == -1) {
            if (j == 6) {
              $(".quest").html("You Lose <br> Refresh to play again <br> ANSWER: "+(movies[randNo]).toUpperCase());
              $(".hangman span")[j].style.textDecoration = "line-through";
              play = false;
            } else {
              $(".hangman span")[j].style.textDecoration = "line-through";
              j += 1;
            }
            wrongAlpha.push((event.key).toUpperCase());
          }
          $(".wrong").html("Wrong words: " + wrongAlpha);
        }
      }
    } else {
      alert("Duplicate entry " + (event.key).toUpperCase() + " Enter!!!");
    }

  });

}
