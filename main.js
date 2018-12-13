
simply.title('Hello World!');
ajax({ url: 'https://arrivelah.herokuapp.com/?id=27301' }, function(data){
  simply.subtitle(JSON.parse(data));
});
