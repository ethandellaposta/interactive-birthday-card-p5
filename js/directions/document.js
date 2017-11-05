$(document).ready(function(){


    $(".one").click(function(e) {
        $(".cinq").show();
    });

    $(".two").click(function(e) {
        $(".un").show();
    });

    $(".three").click(function(e) {
        $(".duex").show();
    });

    $(".four").click(function(e) {
        $(".trois").show();
    });

    $(".five").click(function(e) {
        $(".quatre").show();
    });

    $(".homeCode").submit(function(){
        var $input = $(this).serialize();
        console.log("heyooo");
    })


    $("#form input").each(function(){

    });





    let directions = new Directions();

    if(directions.complete()){

    }
});
