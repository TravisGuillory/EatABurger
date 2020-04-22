// Front end js for web views
$(function () {

    $('.create-form').on('submit', (event) => {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newBurger').val().trim(),
            devoured: 0
        };
        // Send an INSERT request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log('Added a new burger');
            location.reload();
        });
    });

    $('.eatBurger').on('click', (event) =>{
        event.preventDefault();
        var id = $(this).data('id');
        var devouredState = {
            devoured: 1
        };
        // Send an UPDATE request
        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log('Burger devoured');
            location.reload();
        });
    });
    
    $('.trashBurger').on('click', (event) =>{
        event.preventDefault();
        var id = $(this).data('id');
        // Send a DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers" + id
        }).then(
            location.reload()
        );
    });

});