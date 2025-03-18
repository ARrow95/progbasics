
// Ki kell kommentelnem mert vlmiért a prompt-ot nem szereti :(
// let name = prompt("Mi a neved?");
// console.log(`Szia, ${name}!`);
// let age = prompt("Hány éves vagy?");
// console.log(`Komolyan ennyi, ${age}!`);

let movie0 = {
    title : "The Lord of the Rings: The Fellowship of the Ring",
    director : "Peter Jackson",  
    releaseYear : 2001,  
    isMovie : true, 
    episodeCount : null
};
if (movie0.episodeCount == null){
    delete movie0.episodeCount;
};
let movie1 = {
    title : "The Lord of the Rings: The Two Towers",
    director : "Peter Jackson",  
    releaseYear : 2002,  
    isMovie : true, 
    episodeCount : null
};
if (movie1.episodeCount == null){
    delete movie1.episodeCount;
};
let movie2 = {
    title : "The Lord of the Rings: The Return of the King",
    director : "Peter Jackson",  
    releaseYear : 2003,  
    isMovie : true, 
    episodeCount : null
};
if (movie2.episodeCount == null){
    delete movie2.episodeCount;
};
let movie3 = {
    title : "Fight Club",
    director : "David Fincher",  
    releaseYear : 1999,  
    isMovie : true, 
    episodeCount : null
};

if (movie3.episodeCount == null){
    delete movie3.episodeCount;
};

let movie4 = {
    title : "The Witcher",
    director : "Lauren Schmidt Hissrich",  
    releaseYear : 2019,  
    isMovie : false, 
    episodeCount : 24
};

if (movie4.episodeCount == null){
    delete movie4.episodeCount;
};

let movies = [movie0, movie1, movie2, movie3, movie4];

console.log(movies);