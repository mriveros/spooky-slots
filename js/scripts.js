// Business Logic

function Machine () {
  //this.symbols = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];

  //this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "candy", "black cat", "black cat", "bat", "bat", "ghost", "ghost"];

  //this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "black cat", "witch", "witch", "ghost", "ghost", "bat", "bat"];

  //this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "skull", "skull", "skull", "pumpkin", "pumpkin", "candy", "black cat", "witch", "zombie", "bat", "bat", "ghost", "ghost"];

  this.symbols = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg"];


  this.reel1 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg", "ea", "ea", "fl", "fl", "vb", "vb", "vp", "vp"];

  this.reel2 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg", "ea", "fl", "bll", "bll", "vp", "vp", "vb", "vb"];

  this.reel3 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg", "skull", "cinto", "cinto", "jmi", "jmi", "ea", "fl", "bll", "zi", "vb", "vb", "vp", "vp"];

 // this.reel1 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg"];

 // this.reel2 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg"];

 // this.reel3 = ["cinto", "ea", "vp", "vb", "bll", "jmi", "ps", "zi", "mc", "fl", "odg"];

  // this.reel1 = ["skull"];
  // this.reel2 = ["skull"];
  // this.reel3 = ["skull"];

  // this.reel1 = ["grim reaper"];
  // this.reel2 = ["grim reaper"];
  // this.reel3 = ["grim reaper"];
  //
  // this.reel1 = ["candy"];
  // this.reel2 = ["candy"];
  // this.reel3 = ["candy"];
  //
  // this.reel1 = ["ghost"];
  // this.reel2 = ["ghost"];
  // this.reel3 = ["ghost"];
  // //
  // this.reel1 = ["bat"];
  // this.reel2 = ["bat"];
  // this.reel3 = ["bat"];
  //
  // this.reel1 = ["witch"];
  // this.reel2 = ["witch"];
  // this.reel3 = ["witch"];

  // this.reel1 = ["pumpkin"];
  // this.reel2 = ["pumpkin"];
  // this.reel3 = ["pumpkin"];
  //
  // this.reel1 = ["werewolf"];
  // this.reel2 = ["werewolf"];
  // this.reel3 = ["werewolf"];

  // this.reel1 = ["zombie"];
  // this.reel2 = ["zombie"];
  // this.reel3 = ["zombie"];
  //
  // this.reel1 = ["vampire"];
  // this.reel2 = ["vampire"];
  // this.reel3 = ["vampire"];
  //
  // this.reel1 = ["black cat"];
  // this.reel2 = ["black cat"];
  // this.reel3 = ["black cat"];

}

function Player () {
   this.bankRoll = 10;
}

Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  return reelStop;
}
// Runs through winningReel array to check for winning combinations//
Machine.prototype.winningCombo = function(reel1Result, reel2Result, reel3Result, newPlayer) {
      var winningReel = [];
      var winType = "";
      var audio = new Audio('audio/slot.mp3');
      var spinReelAudio = new Audio('audio/spinreel.mp3');
      var skull = new Audio('audio/skull.mp3');
      var blackCat = new Audio('audio/black cat.mp3');
      var witch = new Audio('audio/witch.mp3');
      var vampire = new Audio('audio/vampire.mp3');
      var zombie = new Audio('audio/zombie.mp3');
      var ghost = new Audio('audio/ghost.mp3');
      var zombie = new Audio('audio/zombie.mp3');
      var pumpkin = new Audio('audio/pumpkin.mp3');
      var candy = new Audio('audio/candy.mp3');
      var grimReaper = new Audio('audio/grimreaper.mp3');
      var devil = new Audio('audio/devil.mp3');
      var voodoo = new Audio('audio/voodoo.mp3');
      var buzzLoss = new Audio('audio/buzzloss.mp3');
      var clip1Loss = new Audio('audio/clip1loss.mp3');
      var clip2Loss = new Audio('audio/clip2loss.mp3');
      var tromboneLoss = new Audio('audio/tromboneloss.mp3');
      var gameShowLoss = new Audio('audio/gameshowloss.mp3');
      var losingLaugh = new Audio('audio/losing laugh.mp3');

      winningReel.push(reel1Result);
      winningReel.push(reel2Result);
      winningReel.push(reel3Result);

      for (i = 0; i < winningReel.length; i++) {
        if (winningReel[0] == "odg" && winningReel[1] == "odg" && winningReel[2] == "odg")  {
           newPlayer.bankRoll += 10000;
           winType = "Robaste $10000!";
         setTimeout(function() { grimReaper.play(); }, 7300);
           return winType;
        } else if (winningReel[0] === "zi" && winningReel[1] === "zi" && winningReel[2] === "zi")  {
            newPlayer.bankRoll += 1000;
            winType = "Robaste $1000!";
            setTimeout(function() { zombie.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "mc" && winningReel[1] === "mc" && winningReel[2] === "mc")  {
            newPlayer.bankRoll += 500;
            winType = "Robaste $500!";
            setTimeout(function() { vampire.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "ps" && winningReel[1] ==="ps" && winningReel[2] ==="ps") {
            newPlayer.bankRoll += 250;
            winType = "Robaste $250!";
            setTimeout(function() { devil.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "vb" && winningReel[1] === "vb" && winningReel[2]=== "vb") {
            newPlayer.bankRoll += 175;
            winType = "Robaste $175!";
            setTimeout(function() { voodoo.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "vp" && winningReel[1]=== "vp" && winningReel[2] === "vp")  {
            newPlayer.bankRoll += 100;
            winType = "Robaste $100!";
            setTimeout(function() { ghost.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "bll" && winningReel[1] === "bll" && winningReel[2] === "bll")  {
            newPlayer.bankRoll += 64;
            winType = "Robaste $64!";
            setTimeout(function() { witch.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "fl" && winningReel[1] === "fl" && winningReel[2] === "fl")  {
            newPlayer.bankRoll += 36;
            winType = "Robaste $36!";
            setTimeout(function() { blackCat.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "ea" && winningReel[1] === "ea" && winningReel[2] === "ea")  {
            newPlayer.bankRoll += 18;
            winType = "Robaste $18!";
            setTimeout(function() { candy.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "jmi" && winningReel[1] === "jmi" && winningReel[2] === "jmi")  {
            newPlayer.bankRoll += 12;
            winType = "Robaste $12!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if ((winningReel[0] === "jmi" && winningReel[1] === "jmi") || (winningReel[0] === "jmi1" && winningReel[2] === "jmi1") || (winningReel[1] === "jmi" && winningReel[2] === "jmi")) {
            newPlayer.bankRoll += 4;
            winType = "Robaste $4!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if ((winningReel[0] === "jmi1") || (winningReel[1] === "jmi1") || (winningReel[2] === "jmi1")) {
            newPlayer.bankRoll += 2;
            winType = "Robaste $2!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "cinto" && winningReel[1] === "cinto" && winningReel[2] === "cinto") {
            newPlayer.bankRoll -= (Math.floor(newPlayer.bankRoll * 0.9));
            setTimeout(function() { skull.play(); }, 7300);
            return winType = "Cuidado con el Cintarazo! te hizo perder el 90 % de tus robos";
        } else {
            winType = "no robaste nada!";

            var randomLoss = Math.floor(Math.random() * 6);

            if (randomLoss === 0) {
              setTimeout(function() { losingLaugh.play(); }, 7300);
            } else if (randomLoss === 1) {
              setTimeout(function() { buzzLoss.play(); }, 7300);
            } else if (randomLoss === 2) {
              setTimeout(function() { clip1Loss.play(); }, 7300);
            } else if (randomLoss === 3) {
              setTimeout(function() { clip2Loss.play(); }, 7300);
            } else if (randomLoss === 4) {
              setTimeout(function() { tromboneLoss.play(); }, 7300);
            } else if (randomLoss === 5) {
              setTimeout(function() { gameShowLoss.play(); }, 7300);
            }
            return winType;
          }
        }
      }

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();
  var newPlayer = new Player();

  var reel1Counter = 0, reel1Cycles = 50;
  var reel2Counter = 0, reel2Cycles = 70;
  var reel3Counter = 0, reel3Cycles = 90;

  function spinFlash1() {
  $(".reel1output").empty();
  $(".reel1output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel1Counter++;
    if( reel1Counter < reel1Cycles ){
      setTimeout( spinFlash1, 70 );
    }
  }

  function spinFlash2() {
  $(".reel2output").empty();
  $(".reel2output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel2Counter++;
    if( reel2Counter < reel2Cycles ){
      setTimeout( spinFlash2, 70 );
    }
  }

  function spinFlash3() {
  $(".reel3output").empty();
  $(".reel3output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel3Counter++;
    if( reel3Counter < reel3Cycles ){
      setTimeout( spinFlash3, 70 );
    }
  }

  $("#spin").click(function(event) {
    event.preventDefault();

    if (newPlayer.bankRoll <= 0) {
    $("body").css("background-image", "url('../spooky-slots/img/reaper.jpg')");
     $(".hideWhenCashoutOrBust").hide();
     $(".container").hide();
     $("#results").show();
     $(".resultCashOut").hide();

   } else if (newPlayer.bankRoll >= 1) {
      newPlayer.bankRoll -= 1;

      $("#spin-button").hide().delay(9000).fadeIn();
      $("#total-bank-roll").hide().delay(9000).fadeIn();
      $("#last-spin-winnings").hide().delay(9000).fadeIn();
      $(".container").slideUp().delay(9000).slideDown();
      $(".winningsAlert").delay(7300).fadeIn().delay(1690).slideUp();

      var slotPull = new Audio('audio/slotpull.mp3');
      var wheelStop12 = new Audio('audio/wheel stop 1 2.mp3');
      var wheelStop3 = new Audio('audio/wheel stop 3.mp3');

      slotPull.play();

      setTimeout(function() { wheelStop12.play(); }, 3500);
      setTimeout(function() { wheelStop12.play(); }, 4900);
      setTimeout(function() { wheelStop3.play(); }, 6300);

      reel1Counter = 0;
      reel2Counter = 0;
      reel3Counter = 0;

      var reel1Result = newMachine.spinReel(newMachine.reel1);
      var reel2Result = newMachine.spinReel(newMachine.reel2);
      var reel3Result = newMachine.spinReel(newMachine.reel3);

      // START REEL1 IMAGE DISPLAY

      spinFlash1();
      setTimeout(function() { $(".reel1output").empty(); $(".reel1output").append("<img src='img/" + reel1Result + ".jpg' class='img responsive'>"); }, 3500);

      $(".reel1output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

      // START REEL2 IMAGE DISPLAY

      spinFlash2();
      setTimeout(function() { $(".reel2output").empty(); $(".reel2output").append("<img src='img/" + reel2Result + ".jpg' class='img responsive'>"); }, 4950);

      $(".reel2output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

      // START REEL3 IMAGE DISPLAY

      spinFlash3();
      setTimeout(function() { $(".reel3output").empty(); $(".reel3output").append("<img src='img/" + reel3Result + ".jpg' class='img responsive'>"); }, 6375);

      $(".reel3output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

      var checkCurrentWinAmount = newMachine.winningCombo(reel1Result, reel2Result, reel3Result, newPlayer);
      $(".total-bank-roll").text("$" + newPlayer.bankRoll);
      $(".last-spin-winnings").text(checkCurrentWinAmount);
    }
  });

  $("#play-again").click(function(event) {
    location.reload();
  });

  $("#cash-out").click(function(event) {
    $("body").css("background-image", "url('../spooky-slots/img/slenderman.jpg')");
    $(".container").hide();
    $(".hideWhenCashoutOrBust").hide();
    $("#results").show();
    $(".resultBust").hide();
    $(".finalBankRoll").text("$" + newPlayer.bankRoll);
    $(".finalBankRoll").show();
  });

});
