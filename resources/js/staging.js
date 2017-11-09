//All Raider Functions Here


// Get Random Raider Path
function getRandomRaiderPath(numberOfPaths) {
    let randomPathNumber = Math.floor((Math.random()*numberOfPaths)+1);
    let randomPath = "#raiderPath"+randomPathNumber;
    return randomPath;
};
// End Get Random Raider Path

// Generate Raider Function
let raiderNumber = 0;
function generateRaider() {
    raiderNumber++;
    let raiderId = "raiderNo"+raiderNumber;
    let raider = "<span class='raidersDivs'><img id="+raiderId+" class='raiders' src = './resources/images/raider.jpg'></span>"
    let raiderPath = getRandomRaiderPath(5);
    $(raiderPath).append(raider);
    return raiderId;
    console.log(raiderId);
};
// End Generate Raider Function

// Move Raiders Function
function moveRaiders() {
    $(".raidersDivs").each(function() {
        let currentPositionObject = $(this).position();
        let currentDistanceFromLeft = Number(currentPositionObject.left);
        $("#testOutput").text($(this).attr("id")+"  ||   "+currentDistanceFromLeft);
        let raiderStartPosition = currentDistanceFromLeft;
        if ($(this).position().left > 210) {
            newRaiderPosition = raiderStartPosition - 1;
            $(this).offset({left: newRaiderPosition});
            };
        });
    setTimeout(moveRaiders,10);
};
// End Move Raiders Function


// Remove Raider Debris Function
function removeDebris() {
    $(".raidersDivs").each(function() {
       if ($(this).find($("img")).attr("class") === "explosions") {
          $(this).remove();
       }; 
    });
    setTimeout(removeDebris, 500);
};
// End Remove Raider Debris Function


//End All Raider Functions


// Move Vipor Functions
function moveViporDown() {
    let currentPositionObject = $("#vipor").position();
    let currentDistanceFromTop = currentPositionObject.top;
    let newDistanceFromTop = Number(currentDistanceFromTop+100);
    if (currentDistanceFromTop < 416) {
      $("#vipor").offset({top: newDistanceFromTop});
    };
};

function moveViporUp() {
    let currentPositionObject = $("#vipor").position();
    let currentDistanceFromTop = currentPositionObject.top;
    let newDistanceFromTop = Number(currentDistanceFromTop-100);
    let parentContainerDistanceFromTop = $("#viporZone").position().top
    if (currentDistanceFromTop > Number(parentContainerDistanceFromTop + 50)) {
       $("#vipor").offset({top: newDistanceFromTop});
    };
};
// End Move Vipor Functions

// Fire Missile One Function
let missileOneFired = false;
function fireMissleOne() {
    if (missileOneFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile").offset({top: newMissileTopPosition});
    $("#missile").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileOne();

    function moveMissileOne() {
    missileOneFired = true;
    let hitRaider = false;
    $("#missile").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile").css("visibility", "visible");
    $("#firedMissile").offset({left: firedMissilePosition});
    let explosion = "<img class='explosions' src='./resources/images/explosion.png'>"
    $(".raidersDivs").each(function() {
      if(Math.abs(Math.floor($(this).position().left) - Math.floor($("#firedMissile").position().left)) < 10 &&
         Math.abs(Math.floor($(this).position().top) - Math.floor($("#firedMissile").position().top)) < 50) {
//         $(this).remove();
         $(this).html("<img class='explosions' src='./resources/images/explosion.png'>");
//         setTimeOut($(this).remove(), 1000);
         hitRaider = true;
      };
    });
    if(firedMissilePosition < 475 && hitRaider !== true) {
       setTimeout(moveMissileOne, 1);
    } else {
       $("#firedMissile").css("visibility", "hidden");
       missileOneFired = false;
       return;
    };
  };
 };
};
// End Fire Missile One Function


// Fire Missile Two Function
let missileTwoFired = false;
function fireMissileTwo() {
    if (missileTwoFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile2").offset({top: newMissileTopPosition});
    $("#missile2").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileTwo();

    function moveMissileTwo() {
    missileTwoFired = true;
    let hitRaider = false;
    $("#missile2").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile2").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile2").css("visibility", "visible");
    $("#firedMissile2").offset({left: firedMissilePosition});
    let explosion = "<img class='explosions' src='./resources/images/explosion.png'>"
    $(".raidersDivs").each(function() {
      if(Math.abs(Math.floor($(this).position().left) - Math.floor($("#firedMissile2").position().left)) < 10 &&
         Math.abs(Math.floor($(this).position().top) - Math.floor($("#firedMissile2").position().top)) < 50) {
//          $(this).remove();
         $(this).html("<img class='explosions' src='./resources/images/explosion.png'>");
//         removeRaider($(this));
         hitRaider = true;
      };
    });
    if(firedMissilePosition < 475 && hitRaider !== true) {
     setTimeout(moveMissileTwo, 1);
    } else {
       $("#firedMissile2").css("visibility", "hidden");
       missileTwoFired = false;
       return;
    };
  };        
 };
};
// End Fire Missile Two Function


// Fire Missile Three Function
let missileThreeFired = false;
function fireMissileThree() {
    if (missileThreeFired === true) {
        return;
    } else {
    let currentViporPositionObject = $("#vipor").position();
    let currentViporDistanceFromTop = currentViporPositionObject.top;
    let currentViporDistanceFromLeft = Number(currentViporPositionObject.left);
    let newMissileTopPosition = Number(currentViporDistanceFromTop+5);
    $("#missile3").offset({top: newMissileTopPosition});
    $("#missile3").css("visibility", "visible");
    let firedMissilePosition = currentViporDistanceFromLeft;
    moveMissileThree();

    function moveMissileThree() {
    missileThreeFired = true;
    let hitRaider = false;
    $("#missile3").css("visibility", "hidden");
    firedMissilePosition = firedMissilePosition+1;
    $("#firedMissile3").offset({top: Number(currentViporDistanceFromTop)+3});
    $("#firedMissile3").css("visibility", "visible");
    $("#firedMissile3").offset({left: firedMissilePosition});
    let explosion = "<img class='explosions' src='./resources/images/explosion.png'>";
    $(".raidersDivs").each(function() {
      if(Math.abs(Math.floor($(this).position().left) - Math.floor($("#firedMissile3").position().left)) < 10 &&
         Math.abs(Math.floor($(this).position().top) - Math.floor($("#firedMissile3").position().top)) < 50) {
//         $(this).remove();
         $(this).html("<img class='explosions' src='./resources/images/explosion.png'>");
//         removeRaider($(this));
         hitRaider = true;
      };
    });
    if(firedMissilePosition < 475 && hitRaider !== true) {
     setTimeout(moveMissileThree, 1);
    } else {
       $("#firedMissile3").css("visibility", "hidden");
       missileThreeFired = false;
       return;
    };
  };        
 };
};
// End Fire Missile Three Function


// Key Down Functions and Globals
let keyPressObject = {38: false, 40: false, 32: false}
let functionsObject = {38: 'moveViporUp()', 40: 'moveViporDown()', 32: 'fireMissiles()'};
let upArrow = 38;
let upArrowActive = false;
let downArrow = 40;
let downArrowActive = false;
let spaceBar = 32;
let spaceBarActive = false;
let missileCounter = 0;


// Document.ready Functions
$(document).ready(function() {
    setInterval(generateRaider, 2000);
    moveRaiders();
    removeDebris();
    let currentVipPosition = $("#vipor").position().top;
    let startVipPosition =Number(currentVipPosition + 35);
    $("#vipor").offset({top: startVipPosition});
 $(document).keyup(function(event) {
    keyPressObject[event.which] = (event.type == 'keydown');
}); 
$(document).keydown(function(event) {
    keyPressObject[event.which] = (event.type == 'keydown');
    if (keyPressObject[38] && keyPressObject[32]) {
        console.log("reading both keys");
        moveViporUp();
        fireMissiles();
    } else
    if (keyPressObject[40] && keyPressObject[32]) {
        moveViporDown();
        fireMissiles();   
    } else
    if (keyPressObject[38]) { 
        moveViporUp();
    } else
    if (keyPressObject[40]) {
        moveViporDown();
    } else
    if (keyPressObject[32]) {
        fireMissiles();
    };
});
});
// End Document.ready Functions

function fireMissiles() {
     missileCounter++;
     if (missileCounter > 3) {
         missileCounter = 1;
     }
     if (missileCounter === 1) {
         fireMissleOne();
     } else
     if (missileCounter === 2) {
         fireMissileTwo();
     } else
     if (missileCounter === 3) {
         fireMissileThree();
     }
    };
// End Keydown Functions and Globals