var b1 = 2;
var bsn = [2, 7, 3, 0, 1]
var count = 0;

// CONFIG
simply.fullscreen(true)

// SELECT BUS STOP NUMBER!!!

// displays the bus stop number for now
simply.body(bsn.join("") + '\n Count:' + count)

simply.on('singleClick', function (e) {

    // e.button
    // select
    // up
    // down

    if (e.button === 'up') {
        bsn[count] = bsn[count] + 1
        check()
        rerunUI()
    } else if (e.button === 'down') {
        bsn[count] = bsn[count] - 1
        check()
        rerunUI()
    } else if (e.button === 'select') {
        count = count + 1
        check()
        rerunUI()
    }
});

function check() {
    if (bsn[count] > 9) {
        bsn[count] = 0
    }

    if(bsn[count] < 0){
        bsn[count] = 9
    }

    if (count >= bsn.length) {
        count = 0
    }
}

function rerunUI() {
    simply.body(bsn + '\n Count:' + count)
}