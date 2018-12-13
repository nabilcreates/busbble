simply.title('Hello World!');
ajax({
    url: 'https://arrivelah.herokuapp.com/?id=27301'
}, function (data) {

    let jsondata = JSON.parse(data)

    // ADD TO STRING FOR EVERYTHING!
    
    simply.subtitle(`${jsondata.services[0].no.toString()} is arriving in ${jsondata.services[0].next.duration_ms/60000}`);

    // for (var i = 0; i < jsondata.services.length; i++) {
    // }

});