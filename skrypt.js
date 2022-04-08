$(document).ready(function(){

    //Rozmycie linków
    $('a').click(function() {
            this.blur();
        });

    //Ukrywanie wszystkich opisów przedmiotów w pudełkach informacyjnych

    $("#infobox > div").css("display", "none");

    //Wywołanie pudełka informacyjnego po klknięciu na guzik z plusem
    //Wtedy wyskakuje info box, tło zanika - staje się przyćmione.

    $(".more a").click(function(){
        $("#infobox").animate({bottom: '400px'}, 300);
        $("#fade_bg").fadeIn();
        return false;
    });

    //1. Eksponowanie szerszego guzika informacyjnego przy najechaniu myszą (hover)

    $(".more").hover(function(){
        $(this).stop().animate({width: '150px' }, 200).css({'z-index' : '10'}); 
        //poszerzenie i zmniejszenie zakresu wysuwanego diva z informacją o nazwie
        }, function () {
            $(this).stop().animate({width: '50px' }, 200).css({'z-index' : '1'});
    });

    //Pokazywanie opisu dla wybranego przedmiotu.

    $("#nala a").click(function(){
        $("#nala_info").show();
    });

    $("#zazu a").click(function(){
        $("#zazu_info").show();
    });

    $("#timon a").click(function(){
        $("#timon_info").show();
    });

    $("#simba a").click(function(){
        $("#simba_info").show();
    });

    $("#pumba a").click(function(){
        $("#pumba_info").show();
    });

    $("#rafiki a").click(function(){
        $("#rafiki_info").show();
    });

    //Przywracanie ostrości tła, chowanie pudełka z opisem i obrazkiem przedmiotu.

    $("#fade_bg, .close").click(function(){
        $("#fade_bg").fadeOut();
        $("#infobox").animate({bottom: '-200px' }, 300, function() {
            $("#infobox > div").css("display", "none");
        });
        return false;
    });	
}); 