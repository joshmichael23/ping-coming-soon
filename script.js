$(document).ready(function(){

    $("form").submit(function(e){
        e.preventDefault();
        var email = $("#email").val();

        if(isEmail(email)){ 
            $(".form-input").css('border', '1px solid hsl(223, 100%, 88%)');
            $("label").fadeOut();
        }else{
            $(".form-input").css('border', '1px solid red');
            $("label").fadeIn();
        }


    });


});

function isEmail(email){
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(email) && email.length != 0)
        return true;
    else
        return false;
}