$(document).ready(function() {

    //create array to store all user information
    var seatArray = [];

    //identify clicked seat as chosen.
    // $("img.seat").on('click', function() {
    //     $(this).attr('src', "assets/occupiedSeat.png");
    // });

    //send seatID to form.
    $("img.seat").on("click", function() {
        var seatId = $(this).attr("id");
        $("#seatPlace").val(seatId);
    });
<<<<<<< HEAD
    //this variable into the form.
=======
>>>>>>> cbad7fa2f397c6756d85d432018e61ab3bd5e6a8

    //create tooltip when hovering
    $("img.seat").on('hover', function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

    //submit button to store form information in array.
    $('button#loadButton').on('click', function() {
        var practice = new userInfo($("#seatPlace").val(), $("#firstName").val(),$("#lastName").val(), $("#email").val(), $("#phone").val());
        console.log(practice);
        seatArray.push(practice);
        console.log(seatArray);
        for (var i = 0; i < seatArray.length; i++) {
          console.log(seatArray[i].seatPosition);
          $('img.seat').each(function(i) {
            if (seatArray[i].seatPosition === $('img.seat').attr('id') {
              $('img.seat').attr('src', 'assets/occupiedSeat.png');
            }
          });
        }
    });

    //constructor function to create object of person's information.
    function userInfo(seatPosition, firstName, lastName, email, phone) {
        this.seatPosition = seatPosition;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }





});
