<<<<<<< HEAD


$("seatSpot").on(click(function getConfirmation(){
               var C = prompt("Do you wish to Reserve?");}))


//this is a modal, that pops using a photo
//<a href="path/to/img.jpg" class="ssi-imgBox">My cat</a>
//<div class="modal">

<div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn btn-secondary popover-test"
  title="Popover title" data-content="Do you wish to reserve this Seat?">choose</a> </p>
  <hr>
=======
$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/occupiedSeat.png");
  });
});

$(".leftImg").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 0,
      center: ["50%", "100%"],
      animateTo:180
      })
    }
  }
});
>>>>>>> 61e5ce549e4f84b1c222dd2bb58c4e1d1f66840b
