console.log("Hello World");

const fs = require("fs");
fs.readFile("input.txt","utf-8",(err, fd)=>{
	if(err){
		console.log("There was an error: " + err);
	} else {
		console.log("The file says: \n" + fd);
	}
});

const sw = require("star-wars-quotes");
console.log(sw());

const superheroes = require('superheroes');
const supervillains = require('supervillains');
supervillains.random();

console.log("A veces, para hacer lo correcto se deben abandonar las cosas que más se desean, incluso los sueños.-" + superheroes.random() + "  \n VS \n  No hay ni bien ni mal, sólo hay poder y personas demasiado débiles para buscarlo.-" + supervillains.random());

