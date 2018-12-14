var b1 = 2;
var bsn = [2, 7, 3, 0, 1]
var count = 0;
var currentstatus = 'none';

// CONFIG
simply.fullscreen(true)

simply.title('add off? again!!!')

// RUN A FUNCTION SPECIFIC TO DISPLAYING THE UI
displayUI()

// USE BUTTON HANDLER
simply.on('singleClick', function (e) {

    // e.button
    // select
    // up
    // down

    if (e.button === 'up') {
        bsn[count] = bsn[count] + 1
        check()
        displayUI()
    } else if (e.button === 'down') {
        bsn[count] = bsn[count] - 1
        check()
        displayUI()
    } else if (e.button === 'select') {
        count = count + 1
        check()
        displayUI()
    }
});

// LONG CLICK HANDLER FOR BUTTON
simply.on('longClick', function (e) {

    currentstatus = 'making api call'
    displayUI()

    // MAKE AN API CALL
    ajax({
        url: 'https://arrivelah.herokuapp.com/?id=' + bsn.join(""),
        type: 'json'
    }, function (data) {

        currentstatus = 'called api'
        displayUI()
        
        // DISPLAY THE DATA
        simply.body(data.services[0].no + ' is going to arrive in ' + toMins(data.services[0].next.duration_ms) + ' Mins');
        simply.off()
    });
});

function check() {
    if (bsn[count] > 9) {
        bsn[count] = 0
    }

    if (bsn[count] < 0) {
        bsn[count] = 9
    }

    if (count >= bsn.length) {
        count = 0
    }
}


function displayUI() {
    simply.body(bsn.join("") + '\nCount:' + count + "\nCurrent Value:" + bsn[count] + "\nStatus:" + currentstatus)
}

function toMins(ms){
    return Math.floor(ms / 60000)
}