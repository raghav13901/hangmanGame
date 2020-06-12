var movies = ["avatar", "titanic", "avengers endgame", "mother india", "gandhi", "pirates of the caribbean on stranger tides"];
var desc = [" This movie of James Cameron's broke box all office records, conventional wisdom said that the key reasons for the film's unprecedented success were its jaw-dropping visuals, excellent use of 3D, and the immersive setting of Pandora.", "On March 1, 1998, the film became the first movie to gross $1 billion, months after its release", "This Movie became the highest-grossing movie in history on July 21, 2019, after 89 days of release, and had become the second-highest-grossing movie worldwide 12 days after its initial release.", "The first Indian movie nominated for Oscar", "First indian movie to get oscar", "This movie officially holds the record with a budget of $378.5 million. Hint:A film of Johnny Depp"];
var randNo = Math.floor(Math.random() * movies.length);
var span = 0;
var alpha = [];
var play = true;
var specialChar = ["Tab", "CapsLock", "Shift", "Control", "Meta", "Alt", "Enter","Backspace"];
var wrongAlpha = [];
var rightAlpha = [];
var wrongAlphaM = [];
var rightAlphaM = [];
var alphaM = [];
var i = 0,
  j = 0,
  w = 0;
var s = "";
function startM(){
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
}
function check(){
  var x = document.getElementById("myText").value;
  function allLetter() {
    var letters = /^[Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m]+/;
    if (x.match(letters) && specialChar.indexOf(x) == -1 && x != ",") {
      return true;
    } else {
      alert("Invalid Character " + x + " Enter!!!");
      return false;
    }
  }
  if(specialChar.indexOf(x)== -1){
  if ((play == true) && allLetter()) {
    if ((alphaM.indexOf(x.toLowerCase()) === -1) && (alphaM.indexOf(x.toUpperCase()) === -1)) {

      alphaM.push(x);
      if (((movies[randNo].indexOf(x) != -1) || (movies[randNo].toUpperCase().indexOf(x) != -1)) && rightAlphaM.indexOf(x) == -1) {
        rightAlphaM.push(x.toUpperCase());
        for (i = 0; i < movies[randNo].length; i++) {
          if (x.toLowerCase() == movies[randNo][i]) {
            $(".ans span")[i].innerHTML = (x).toUpperCase();
            span++;
          }
        }
        if (span === movies[randNo].length) {
          $(".quest").html("You Won!!! <br> Refresh to play again");
          play = false;
        }
      } else {
        if (wrongAlphaM.indexOf(x) == -1) {
          if (j == 6) {
            $(".quest").html("You Lose <br> Refresh to play again <br> ANSWER: " + (movies[randNo]).toUpperCase());
            $(".hangman span")[j].style.textDecoration = "line-through";
            play = false;
          } else {
            $(".hangman span")[j].style.textDecoration = "line-through";
            j += 1;
          }
          wrongAlphaM.push(x);
        }
        $(".wrong").html("Wrong words: " + wrongAlphaM);
      }
    } else {
      alert("Duplicate entry " + (x).toUpperCase() + " Enter!!!");
    }
  }
}
}
if(screen.width >= 750){
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

  var l = document.addEventListener("keyup", function(event) {
    function allLetter() {
      var letters = /^[Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m]+/;
      if (event.key.match(letters) && specialChar.indexOf(event.key) == -1 && event.key != ",") {
        return true;
      } else {
        alert("Invalid Character " + event.key + " Enter!!!");
        return false;
      }
    }
    if(specialChar.indexOf(event.key) == -1){
    if ((play == true) && allLetter()) {
      if ((alpha.indexOf(event.key.toLowerCase()) === -1) && (alpha.indexOf(event.key.toUpperCase()) === -1)) {

        alpha.push(event.key);
        if (((movies[randNo].indexOf(event.key) != -1) || (movies[randNo].toUpperCase().indexOf(event.key) != -1)) && rightAlpha.indexOf(event.key) == -1) {
          rightAlpha.push(event.key.toUpperCase());
          for (i = 0; i < movies[randNo].length; i++) {
            if (event.key.toLowerCase() == movies[randNo][i]) {
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
              $(".quest").html("You Lose <br> Refresh to play again <br> ANSWER: " + (movies[randNo]).toUpperCase());
              $(".hangman span")[j].style.textDecoration = "line-through";
              play = false;
            } else {
              $(".hangman span")[j].style.textDecoration = "line-through";
              j += 1;
            }
            wrongAlpha.push((event.key));
          }
          $(".wrong").html("Wrong words: " + wrongAlpha);
        }
      } else {
        alert("Duplicate entry " + (event.key).toUpperCase() + " Enter!!!");
      }
    }
  }
  });

}
}
