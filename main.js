simply.title('Hello World!');
ajax({
    url: 'https://arrivelah.herokuapp.com/?id=27301'
}, function (data) {

    let jsondata = JSON.parse(data)

    // ADD TO STRING FOR EVERYTHING!
    
    simply.body(`${jsondata.services[0].no.toString()} is arriving in ${Math.floor(jsondata.services[0].next.duration_ms/60000)} Mins`);

    // for (var i = 0; i < jsondata.services.length; i++) {
    // }

});