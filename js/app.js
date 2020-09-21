/*Slider=====================================================*/
$('.advantage__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    centerMode: true,
    adaptiveHeight:true,
    responsive:[
        {
        breakpoint: 961,
        settings:{
        slidesToShow: 3,
        
        }
        },
        {
        breakpoint: 641,
        settings:{
        slidesToShow: 2,
        
        }
        }
    ]
});
    
/*Scrolling window============================================*/
let header = $("#header"),
    introH = $("#banner").innerHeight(),
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    
$(window).on('scroll',function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset){
    
    if (scrollOffset >= introH){
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
}

/*Select size=================================================*/ 
$('[data-id]').on('click',function(event){
    event.preventDefault();
    let selectorID = $(this).data('id'),
        selectorValue = $(this).data('value'),
        blockselector = '[data-id="' + selectorID + '"][data-value="' + selectorValue+'"]';
       if(!$(this).hasClass('active')) {
          $('[data-id=' + '"' + selectorID + '"]').removeClass('active');
          $(blockselector).addClass('active');
       }
}); 
/*Select color=================================================*/
$('[data-nomer]').on('click',function(event){
    event.preventDefault();
    let selectorNomer = $(this).data('nomer'),
        selectorColor = $(this).data('color'),
        blockselector = '[data-nomer="' + selectorNomer + '"][data-color="' + selectorColor+'"]';
       if(!$(this).hasClass('active')) {
          $('[data-nomer=' + '"' + selectorNomer + '"]').removeClass('active');
          $(blockselector).addClass('active');
       }
});  

/*Filter category everyday or erotic================================*/   
function filter(category){
    if(category == 'erotic'){
            $('[data-category="erotic"]').css("display","block");
            $('[data-category="everyday"]').css("display","none");
            
        }else{
             $('[data-category="erotic"]').css("display","none");
            $('[data-category="everyday"]').css("display","block");
        }
}
filter('everyday');
    
$('.btn--catalog').on('click',function(event){
    event.preventDefault();
    let category = $(this).data('filter');
    
        if(!$(this).hasClass('active')){
            $('.btn--catalog').removeClass('active');
            $('[data-filter="' + category + '"').addClass('active');
        }
    filter(category);
});  
    

/*Sliding menus=================================================*/
$('[data-scroll]').on('click',function(event){
    event.preventDefault();
    let category = $(this).data('filter');
    let $this=$(this),
        blockId = $this.data('scroll'),
            blockOffset =  $(blockId).offset().top-20;
	
       $("html, body").animate({
           scrollTop: blockOffset},500);
    
    if(category){
       filter(category);
       $('.btn--catalog').removeClass('active');
       $('[data-filter="' + category + '"').addClass('active');
    }
       

});
/*The order window open============================================*/
$('[data-modal="#modal__buy"]').on('click',function(event){
    event.preventDefault();
    $('.modal').css('display','block');                
    $('.modal__dialog').css('display','block');  
    $('body').addClass('no-scroll');
    
    
});
       
/*The order window close============================================*/ $('.modal__close').on('click', function(event){
    event.preventDefault();
    $('.modal').css('display','none');                
    $('.modal__dialog').css('display','none');
    $('body').removeClass('no-scroll');
});

$(".modal").on("click",function(event){

    $('.modal').css('display','none');                
    $('.modal__dialog').css('display','none');
    $('body').removeClass('no-scroll');
      
});
$(".modal__dialog").on("click",function(event){
          event.stopPropagation();
});

