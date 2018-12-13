let busstopcode = 27301
let jsondata;
let clicked = 0;

simply.title(busstopcode);
ajax({
    url: `https://arrivelah.herokuapp.com/?id=${busstopcode}`
}, function (data) {

    jsondata = JSON.parse(data)

    simply.scrollable(true)
    simply.style('mono')

    clicked = 0;

    // ADD TO STRING FOR EVERYTHING!
    simply.body(`${jsondata.services[0].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n ${jsondata.services[1].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n ${jsondata.services[2].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n
    `);

    simply.subtitle(clicked)

    // simply.body(``);
    // simply.body(``,false);


    // for (var i = 0; i < jsondata.services.length; i++) {
    // }

});

simply.on('singleClick', function (e) {
    ajax({
        url: `https://arrivelah.herokuapp.com/?id=${busstopcode}`
    }, function (data) {

        jsondata = JSON.parse(data)
        clicked++
    });

});