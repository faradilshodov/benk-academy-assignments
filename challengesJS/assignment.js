// Challenge 1
console.log("==========Challenge 1==========");

function canIDrive(name, age) {
    if(age >= 16){
        console.log(`Yes ${name}, you are allowed to drive`);
    } else {
        console.log(`Sorry ${name}, you must be over 16 years old to drive`);
    }
}

canIDrive("Fara", 30);

// Challenge 2
console.log("==========Challenge 2==========");

const movieDurations = [90, 120, 105, 135];

let totalMovieDuration = 0;
movieDurations.map((length) => {
    totalMovieDuration += length
})

if (totalMovieDuration > 300){
    console.log("Movie night might be too long!");
} else {
    console.log("Let's plan a movie night!");
}