// Vanilla JavaScript displaying modal Method

var modal = document.getElementById('firstModalAd');

displayModal = function () {
    setTimeout(function () {
        modal.style.display = "block";
        var opacityValue = 0;
        var interval = setInterval(function () {
            opacityValue++;
            modal.style.opacity = opacityValue / 100;
            if (opacityValue === 100) {
                clearInterval(interval);
            }
        }, 3);
    }, 10000);
};

displayModal();


// JQuery displaying model Method
/*
$(document).ready(function () {

    $('#firstModalAd').removeClass('opacityNull');
    setTimeout(function () {
        $('#firstModalAd').fadeIn(400);
    },10000);
});
*/

$('#btnYes').on('click', function () {
    // To open in the same tab
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    // To open in new tab
    // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

$('#btnNo').on('click', function () {
    $('#firstModalAd').fadeOut(400);
});

$('#btnPsy').on('click', function () {
    $('body').css('background-color','magenta');
    $('p').css({
        'color':'blue',
        'font-family':'papyrus'
    });
    $('h1, h2, h3').css({
        'color':'green',
        'font-family':'Comic Sans'
    });

});