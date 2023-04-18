$(document).ready(function(){

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){
            $(".gallery .image").show(400);
        }
        else{
            $(".gallery .image").not("."+filter).hide(200);
            $(".gallery .image").filter("."+filter).show(400);
        }
    })

    //MAGNIFIC-POPUP
    $(".gallery").magnificPopup({
        
        delegate: "a",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery:{
            enabled: true
        },

        callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.

    })


});