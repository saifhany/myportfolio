$("img").click(function(){
    const imgClone = $(this).parent();          
    $(".gallary-bg").addClass("gallary-bg-block")
    $(".gallary-bg").append(imgClone.clone());
    $(".gallary-bg .img-item img").addClass("animated fadeIn");
    $(".gallary-bg").removeClass("animated fadeOut");
  });
  
  $(".gallary-bg").click(function() {                 
    $(this).addClass("animated fadeOut");
    $(this).children().children().addClass("fadeLeft");          
    $(this).children().remove();
    var rmBg= $(this);
    setTimeout(() => {
      rmBg.removeClass("gallary-bg-block");
    }, 400);
  });