var sections = $('section');

$(window).on('scroll',function(){

  sections.each(function(){
    
    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top >= offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }
  })
});