$(function(){
    $('.content').hover(function(){
            $(this).stop().animate({'marginTop':'-29px'},'fast');
        },function(){
            $(this).stop().animate({'marginTop':'0px'},'fast');
        }
    );
});

