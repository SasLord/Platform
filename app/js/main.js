$(document).ready(function(){
    let navSideB = true;
    $(".aSide-caption__btn").click(function(){
        $('.aSide').hide();
    });
    $(".link-aSide-1").click(function(){
        $('.aSide').hide();
        $('.aSide-1').show();
    });
    $(".navSide-caption__btn").click(function(){
        if (navSideB) {
            $('.navSide-list').hide();
            $('.navSide-caption__title').hide();
            $('.navSide-btn').hide();
            $('.navSide').addClass('navSideMin');
            $('.navSide').removeClass('navSide');
            $('.navSide-caption__btn').addClass('navSide-btn-style');
            $('.navSide-caption__btn').removeClass('navSide-caption__btn-style');
        } else {
            $('.navSide-list').show();
            $('.navSide-caption__title').show();
            $('.navSideMin').addClass('navSide');
            $('.navSideMin').removeClass('navSideMin');
            $('.navSide-caption__btn').addClass('navSide-caption__btn-style');
            $('.navSide-caption__btn').removeClass('navSide-btn-style');
            $('.navSide-btn').show();
        }
        navSideB = !navSideB;
    });
});