var b1 = 2;
var bsn = [2, 7, 3, 0, 1]
var count = 0;
var currentstatus = 'none';
var currentservice = 0;
var data;

// CONFIG
simply.fullscreen(true)

simply.title('datatojson?')

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
    }, function (json) {

        data = json

        currentstatus = 'called api'
        displayUI()

        // DISPLAY THE DATA
        displayBusUI()
        simply.off()

        // USE BUTTON HANDLER TO CYCLE BETWEEN BUS SERVICES
        simply.on('singleClick', function (e) {

            if (e.button === 'up') {
                currentservice = currentservice + 1
                displayBusUI()
            } else if (e.button === 'down') {
                currentservice = currentservice - 1
                displayBusUI()
            }
        });
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

function toMins(ms) {
    if(Math.floor(ms / 60000) < 0){
        return '(arr)'
    }else{
        return Math.floor(ms / 60000)
    }
}

function displayBusUI(){
    simply.body(data.services[currentservice].no + ' is going to arrive in ' + toMins(data.services[currentservice].next.duration_ms) + ' Mins');
}