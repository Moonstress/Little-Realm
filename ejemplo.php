<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clase 2: Primeros pasos con HTML</title>
</head>
<body>
    <script>
        $(".event").magnificPopup({

            callbacks: {
                open: function(){

                    $(".hidden-div").css("display", "block");
                },
                close: function(){

                    $(".hidden-div").css("display", "none");
                }
            },

            items: {

                src: ".hidden-div",
                type: "inline"
            },
            closeBtnInside: true
        });</script>
        
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: { enabled: true },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        callbacks: {
            open : function(){
                // var mp = $.magnificPopup.instance,
                //     t = $(mp.currItem.el[0]);
                // console.log( t.attr );
                $("test-popup-link").css("filter", "brightness(0.5)");
                console.log($("test-popup-link").src)
            }
        }
    });


    
</body>
</html>