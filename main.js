let busstopcode = 27301

simply.title(busstopcode);
ajax({
    url: `https://arrivelah.herokuapp.com/?id=${busstopcode}`
}, function (data) {

    let jsondata = JSON.parse(data)

    
    // ADD TO STRING FOR EVERYTHING!
    simply.body(`${jsondata.services[0].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n
    ${jsondata.services[1].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n
    ${jsondata.services[2].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins \n

    `);
    
    // simply.body(``);
    // simply.body(``,false);


    // for (var i = 0; i < jsondata.services.length; i++) {
    // }

});