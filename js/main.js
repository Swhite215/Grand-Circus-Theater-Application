//this is a modal, that pops using a photo
//<a href="path/to/img.jpg" class="ssi-imgBox">My cat</a>
//<div class="modal">
//
// <div class="modal-body">
//   <h5>Popover in a modal</h5>
//   <p>This <a href="#" role="button" class="btn btn-secondary popover-test"
//   title="Popover title" data-content="Do you wish to reserve this Seat?">choose</a> </p>
//   <hr>

$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/selectSeat.png");
    console.log($(this).attr('id'));
  });




  $("img.seat").on('click', function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
