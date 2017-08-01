(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //立即办理按钮
    $('.button').on('touchend',function () {
        window.location.href = 'index1.html';
    });
    //首页点击4大好处标签
    $('#tcBtn').on('click',function () {
        $('.haochu').fadeIn();
        showMask();
    });
    //弹窗知道了按钮
    $('.zdBtn').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //弹窗X
    $('.tcClose').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //提前了解如何换卡按钮
    $('.changeBtn').on('click',function () {
        $('.huanka').fadeIn();
        showMask();
    });

    //获取验证码按钮倒计时
    $('#getCode').on('click',function () {
        if(!$(this).hasClass('disabled')){
            $(this).addClass('disabled');
            $(this).text('60 S');
            var setTime;
            var time=parseInt($("#getCode").text());
            setTime=setInterval(function(){
                if(time<=0){
                    clearInterval(setTime);
                    $('#getCode').removeClass('disabled');
                    $('#getCode').text('获取验证码');
                    return;
                }
                time--;
                $("#getCode").text(time+' S');
            },1000);
        }
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
