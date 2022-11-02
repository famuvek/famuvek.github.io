var cliked;
var code = {
    mail: "V29vZGxhdGhlMjFAZ21haWwuY29t",
    phone: "KzM2IDIwLzI2MSAxMDU5",
    address: "aHR0cHM6Ly9nb28uZ2wvbWFwcy9GMFk4Wg=="
}
var scroll_pos = 0;
var VisibleWidth;
var menuOpen = 0;
var menuClick = 0;
var lastScroll_pos = scroll_pos;

$(document).ready(function() {

    function superAntiBotMeasure(contact) {
        return atob(contact);
    }

    ShouldHaveDoneThatWithCss();
    MenuScroll();
    MobileMenuHandler();

    $(window).resize(function() {
        menuOpen = 0;
        ShouldHaveDoneThatWithCss();
        MenuScroll();
        MobileMenuHandler();
    });

    $(document).scroll(MenuScroll);

    //makes workshop iamge  same height as text, probably can be done with css, no clue how tho.
    function ShouldHaveDoneThatWithCss() {
        VisibleWidth = $('.warper').width();
        if (VisibleWidth > 769) {
            $(".workshopImage").css('height', $('#workshopTextHeight').height());
        } else {
            $(".workshopImage").css('height', '22em');
        }
    }

    //show contacts on click
    $('.ClickForContacts').on('click', function() {
    var lang;
       if ( $('html')[0].lang == "hu" ) {
            lang = {phone:"telefon", map:"térkép", contacts:"Elérhetőségeink", address:"cím"}
        } else {
            lang = { phone:"phone", map:"map", contacts:"our contacts", address:"address"}
        }

       if (!cliked) {
            cliked = 1;
            $('.ClickForContacts').addClass('EaseOut');
            setTimeout(
                function waaaait() {
                    $('#contactUsContainer').css('margin-top','1.4em')
                        $('#contactUsText').replaceWith('<div id="contactUsText"><p><c2>' + lang.contacts + ':</c2></p><p><c2>' + lang.phone + ': </c2>' + superAntiBotMeasure(code.phone) + '</p><p><c2>Email: </c2>' + superAntiBotMeasure(code.mail) + '</p><p><c2>Social:</c2><a target="_blank" href="https://www.facebook.com/famuvek.cnc.laser.faipar">Facebook</a>,<a target="_blank" href="https://www.instagram.com/famuvek.io/">Instagram</a></p><p><c2>'+ lang.address +' :</c2><a target="_blank" href="' + superAntiBotMeasure(code.address) + '">Google ' + lang.map + '</p></div></div>');
                        $('#contactUsFooter').replaceWith('<div class="footerContainer" id="contactUsFooter"><p><f1>' + lang.contacts + ':</f1></p><p>' + lang.phone + ': ' + superAntiBotMeasure(code.phone) + '</p><p>Email: ' + superAntiBotMeasure(code.mail) + '</p><p><a target="_blank" href="https://www.facebook.com/famuvek.cnc.laser.faipar">Facebook</a>,<a target="_blank" href="https://www.instagram.com/famuvek.io/">Instagram</a></p><p><a target="_blank" href=" ' + superAntiBotMeasure(code.address) + '">Google ' + lang.map + '</a></p></div>');
                }, 250);
        }
    });

    //makes page slide to links
    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(aid).offset().top - (48)
        }, 'slow'); //48 is amount of offset
        $("#menu").css('opacity', '1');
        menuClick = 1;
        setTimeout(
            function waaaait() {
                menuClick = 0;
            }, 1000);
    });


    //make menu bar background different on scroll.

    function MenuScroll() {

        var xMax = 0.9;
        var xMin = 0.3;
        var yMax = 375;
        var yMin = 0;

        if (VisibleWidth < 769) {
            xMax = 0.3;
            xMin = 0.8;
            yMax = 681;
            yMin = 0;
        }

        var outputX = xMax

        scroll_pos = $(this).scrollTop()

        if (scroll_pos < yMax) {
            var percent = (scroll_pos - yMin) / (yMax - yMin);
            outputX = percent * (xMax - xMin) + xMin;
        }

        if (menuOpen) {
            outputX = 0.8;
        }

        $("#menu").css('background-color', 'rgba(35,35,35,' + outputX.toFixed(2) + ')');

        if (scroll_pos > 374 && !menuClick && VisibleWidth > 768) {
            $("#menu").css('opacity', '0')
        } else {
            $("#menu").css('opacity', '1')
        }
    }

    function MobileMenuHandler() {
        if (VisibleWidth < 769) {
            $(".mobileMenu").hide();
            $("#mobileMenuButton").show();
        } else {
            $(".mobileMenu").show();
            $("#mobileMenuButton").hide();
        }
    }

    $('#mobileMenuButton,.mobileMenu').on('click', function() {
        if (VisibleWidth < 769) {
            $('.mobileMenu').slideToggle();
            $("#menu").css('background-color', 'rgba(35,35,35,0.8)');
            if (!menuOpen) {
                menuOpen = 1;
            } else {
                menuOpen = 0;
            }
        }
    });
});
