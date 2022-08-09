$("#formTwo").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorTwo();
        submitMSGtwo(false, "Por favor llene todos los campos requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitFormTwo();
    }
});

function submitFormTwo() {
    // Initiate Variables With Form Content
    var email = $("#emailTwo").val();

    $.ajax({
        type: "POST",
        url: "php/contact-two.php",
        data: "emailTwo=" + email,
        success: function(text) {
            if (text == "success") {
                formSuccessTwo();
            } else {
                formErrorTwo();
                submitMSGtwo(false, text);
            }
        }
    });
}

function formSuccessTwo() {
    $("#formTwo");
    submitMSGtwo(true, "¡Mensaje Enviado!")
    document.getElementById("formOne").reset();
}

function formErrorTwo() {
    $("#formTwo").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSGtwo(valid, msg) {
    if (valid) {
        var msgClasses = "h5 text-center fadeIn animated text-success";
    } else {
        var msgClasses = "h5 text-center text-danger";
    }
    $("#msgSubmitTwo").removeClass().addClass(msgClasses).text(msg);
}