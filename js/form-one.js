$("#formOne").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorOne();
        submitMSGone(false, "Por favor llene todos los campos requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitFormOne();
    }
});

function submitFormOne() {
    // Initiate Variables With Form Content
    var name = $("#nameOne").val();
    var email = $("#emailOne").val();
    var tel = $("#telOne").val();
    var message = $("#messageOne").val();

    $.ajax({
        type: "POST",
        url: "php/contact-one.php",
        data: "nameOne=" + name + "&emailOne=" + email + "&telOne=" + tel +  "&messageOne=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccessOne();
            } else {
                formErrorOne();
                submitMSGone(false, text);
            }
        }
    });
}

function formSuccessOne() {
    $("#formOne");
    submitMSGone(true, "¡Mensaje Enviado!")
    document.getElementById("formOne").reset();
}

function formErrorOne() {
    $("#formOne").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSGone(valid, msg) {
    if (valid) {
        var msgClasses = "h5 text-center fadeIn animated text-success";
    } else {
        var msgClasses = "h5 text-center text-danger";
    }
    $("#msgSubmitOne").removeClass().addClass(msgClasses).text(msg);
}