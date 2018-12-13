let data = 'COOL';

fetch("https://arrivelah.herokuapp.com/?id=27301")
.then(res => res.json())
.then(json => {
    data = json;
})

simply.title('Hello World!');
simply.subtitle(data);