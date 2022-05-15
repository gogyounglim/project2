
// 메인슬라이더
$(function(){
    $('.button1').click(function(){
        if($('.slider1').css('display')=== 'block' ){
            $('.slider1').hide();
            $('.slider2').hide();
            $('.slider3').fadeIn();
        }
        else if($('.slider3').css('display')=== 'block' ){
                $('.slider1').hide();
                $('.slider2').fadeIn();
                $('.slider3').hide();
        }
        
        else{
            $('.slider1').fadeIn();
            $('.slider2').hide();
            $('.slider3').hide();

        }
    })
})
$(function(){
    $('.button2').click(function(){
        if($('.slider1').css('display')=== 'block' ){
            $('.slider1').hide();
            $('.slider2').fadeIn();
            $('.slider3').hide();
        }
        else if($('.slider2').css('display')=== 'block' ){
                $('.slider1').hide();
                $('.slider2').hide();
                $('.slider3').fadeIn();
        }
        
        else{
            $('.slider1').fadeIn();
            $('.slider2').hide();
            $('.slider3').hide();

        }
    })
})

// 솔드아웃

$(function(){
    $('.ThreePost').hover(function(){
        $('.SoldOut').show();
    }
    ,function(){
        $('.SoldOut').hide();
    });
});

$(function(){
    $('.ThreePost2').hover(function(){
        $('.SoldOut2').show();
    }
    ,function(){
        $('.SoldOut2').hide();
    });
});

$(function(){
    $('.ThreePost3').hover(function(){
        $('.SoldOut3').show();
    }
    ,function(){
        $('.SoldOut3').hide();
    });
});


