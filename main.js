simply.title('Hello World!');
ajax({
    url: 'https://arrivelah.herokuapp.com/?id=27301'
}, function (data) {

    let jsondata = JSON.parse(data)

    for (var i = 0; i < jsondata.services.length; i++) {
        simply.subtitle(jsondata.services[0]);
    }

});