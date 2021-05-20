var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = '回来呀，小哥哥';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' 还是舍不得我';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
