$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/selectSeat.png");
    console.log($(this).attr('id'));
    //form class changes to visible
  });

  $("img.seat").on("click", function(){
    console.log($(this).attr("id"));
  });





  $("img.seat").on('click', function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('button#loadButton').on('click', function() {
    var practice =  new userInfo($("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#phone").val());
    console.log(practice);
    seatArray.push(practice);
    console.log(seatArray);
    // console.log($("#firstName").val());
    // console.log($("#lastName").val());
    // console.log($("#email").val());
    // console.log($("#phone").val());
  });

});

function userInfo(firstName, lastName, email, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
}

var seatArray = [];
