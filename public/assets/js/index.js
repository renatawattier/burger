$(document).ready(function() {
    // When the user submits a burger, do a post request then add it to the DB
    $("#burger-btn").on("click", function (event) {
        event.preventDefault();

        var userInput = $("#burger-input").val().trim();

        if (userInput != "") {
            $.post("/", {
                    burger: userInput
                })
                .done(function (res) {
                    location.reload();
                })
                .fail(function (err) {
                    alert("An unexpected error occured");
                    throw err;
                });
        };
    });

    $(document).on("click", ".devour-btn", function (event) {
        event.preventDefault();
        burgerId = $(this).data("id");
        console.log(burgerId);
        $.ajax("/", {
            type: "PUT",
            data: {id: burgerId}
        })
        .done(function(res) {
            location.reload();
        })
        .fail(function(err) {
            alert("An unexpected error occured");
        });
    });
});