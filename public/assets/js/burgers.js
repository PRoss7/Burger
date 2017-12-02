$(function () {

    $("devour").on("click", function (event) {

        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredBurger = {
            devour: devouredBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function () {

                console.log("changed devoured to ", devouredBurger);
                location.reload();

            }
            );

    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            name: $("burgerInput").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {

                console.log("created new burger");
                location.reload();

            }

            );

    });

});