// Front end js for web views
$(function () {

    $('.submit-form').on('submit', (event) => {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newBurgerText').val().trim(),
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
        console.log(newBurger);
    });

    $('.orderButton').on('click', function(event) {
        event.preventDefault();
        console.log('Order Button Clicked');
        var id = $(this).data('id');
        var devouredState = {
            devoured: 1
        };
        console.log(id);
        // Send an UPDATE request
        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log('Burger devoured');
            location.reload();
        });
    });
    
    $('.eatButton').on('click', function(event){
        event.preventDefault();
        console.log('Eat Me');
        var id = $(this).data('id');
        console.log(id);
        // Send a DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(
           location.reload()
        );
    });

});