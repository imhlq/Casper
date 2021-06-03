var islike = $.cookie('islike');

if(islike){
    $(".btn-like").text("+3");
    $(".btn-like").attr('disabled', 'disabled');
};

$(".btn-like").click(function () {
    // 你也可以想办法点很多次赞2333
    if(islike){
        var p = $(this).attr('data-submit');
        $.post(p, {date: "today"});
    }
    $.cookie('islike', 'true');
    $(this).text("+3");
    $(this).attr('disabled', 'disabled');
});
