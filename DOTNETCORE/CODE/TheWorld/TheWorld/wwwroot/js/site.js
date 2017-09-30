(function startup(myvar) {

    //JAVASCRIPT WAY
    //var ele = document.getElementById("username");
    //ele.innerHTML = s;

    //var main = document.getElementById("main");
    //main.onmouseenter = function () {
    //    main.style.backgroundColor = "#888";
    //};
    //main.onmouseleave = function () {
    //    main.style.backgroundColor = "";
    //};

    //JQUERY WAY
    var $ele = $("#username");
    $ele.text(myvar);

    var $main = $("#main");
    $main.on("mouseenter", function () {
        $main.css('background-color','#888');
    });

    $main.on("mouseleave", function () {
        $main.css('background-color','');
    });

    var $menuitems = $("ul.menu li a");

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    });
})();
