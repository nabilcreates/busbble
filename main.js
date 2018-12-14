var b1 = 2;
var bsn = [2, 7, 3, 0, 1]
var count = 0;

// CONFIG
simply.fullscreen(true)

// SELECT BUS STOP NUMBER!!!

// displays the bus stop number for now
simply.body(bsn + '' + count)

simply.on('singleClick', function (e) {
    simply.subtitle('You pressed the ' + e.button + ' button!');
});