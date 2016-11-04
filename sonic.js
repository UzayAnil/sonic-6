$(document).ready(function() {
  $('#character').addClass('left-left');
});

var currentKey;
var TimeWalk;
var charStep = 2;
var charSpeed = 400;

//KeyDown Function
  //if there is no currentKey down, execute charWalk
$(document).keydown(function(e) {


//set the currentKey to the key that is down
    currentKey = e.which;
console.log("keyCode: " + e.keyCode);
//execute character movement function charWalk('direction')
    switch(e.which) {


      case 39:
        console.log(e.keyCode);
        charWalk('right');
        break;
      case 37:
        console.log(e.keyCode);
        charWalk('left');
        break;
      default:
        console.log('incorrect key');
    }




});
//KeyUp Function
// $(document).keyup(function(e) {

//           //don't stop the walk if the player is pushing other buttons
//     //only stop the walk if the key that started the walk is released

//          // if(e.keyCode = false) {
//    //set the currentKey to false, this will enable a new key to be pressed
//           currentKey = false;

//    //clear the walk timer
//           clearInterval(TimeWalk);

//   //finish the character's movement
//           $('#character').stop(true, true);
//          // }


// });
//Character Walk Function
function charWalk(dir) {

   processWalk(dir);

   TimeWalk = setInterval(function() {  }, charSpeed);
$(document).keyup(function(e) {

          //don't stop the walk if the player is pushing other buttons
    //only stop the walk if the key that started the walk is released
if(e.which === 39){
         // if(e.keyCode = false) {
   //set the currentKey to false, this will enable a new key to be pressed
          currentKey = false;

   //clear the walk timer
          clearInterval(TimeWalk);

  //finish the character's movement
          $('#character').stop(true, true);}
         // }


});
}


function processWalk(dir) {

//increment the charStep as we will want to use the next stance in the animation
   //if the character is at the end of the animation, go back to the beginning
   charStep++;
   if (charStep == 5) charStep = 1;

//remove the current class
   $('#character').removeAttr('class');

   //add the new class
   switch(charStep) {
      case 1: $('#character').addClass(dir+' -left'); break;
      case 2: $('#character').addClass(dir+'-right'); break;
   }

    if (charStep == 1) {
       $('#character').addClass(dir+' -left');
    }

    if (charStep == 2) {
       $('#character').addClass(dir+'-right');
    }

    if (charStep === 1){
       $('#character').addClass(dir+' -left');
     } else if (charStep === 2) {
       $('#character').addClass(dir+'-right');
     }




   //move the char
    //we will only want to move the character 32px (which is 1 unit) in any direction
    switch(dir) {
      case'left':
      if ($('#character').position().top > 0) {
        $('#character').animate({'left': '-=5%'}, charSpeed);
      }
      break;
      case'right':
        $('#character').animate({'left': '+=5%'}, charSpeed);
        break;
      }

}
