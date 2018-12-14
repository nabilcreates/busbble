var b1 = 2;
var bsn = [2, 7, 3, 0, 1]
var count = 0;

// CONFIG
simply.fullscreen(true)

// SELECT BUS STOP NUMBER!!!

// displays the bus stop number for now
simply.body(bsn + '\n Count:' + count)

simply.on('singleClick', function (e) {

    // e.button
    // select
    // up
    // down
    
    if (e.button === 'up') {
        bsn[count]++
    } else if (e.button === 'down') {
        bsn[count]--
    } else if (e.button === 'select') {
        count++
    }
});
