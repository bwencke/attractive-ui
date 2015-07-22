$(document).ready(function() {

    $('body').css('background-color', '#'+bgColors[Math.floor(Math.random()*bgColors.length)])
    $('.content').mouseenter(function() {
        next();
    });

    $('.content').mouseleave(function() {
        next();
    });

});

var bgColors = [
    '00BCD4',
    '009688',
    '03A9F4',
    'E91E63',
    '9C27B0',
    '4CAF50',
    'FF5722',
    '3E2723',
    '607D8B',
    'E91E63',
    '3F51B5'
]

var numTimes = 0;

function next() {
    numTimes++;
    if(numTimes < 6) {
        var className = numTimes % 2 ? 'back' : 'front';
        $('#pane' + (numTimes-1)).removeClass(className).addClass('hidden-pane');
        $('#pane' + (numTimes+1)).addClass(className).removeClass('hidden-pane');
    }
    var color = '#'+bgColors[Math.floor(Math.random()*bgColors.length)];
    var currentBg = rgb2hex($('body').css('background-color'));
    console.log(currentBg);
    while(currentBg === color) {
        color = '#'+bgColors[Math.floor(Math.random()*bgColors.length)];
    }
    $('body').css('background-color', color)
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2).toUpperCase();
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
