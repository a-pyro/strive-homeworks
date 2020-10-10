/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

let test = 'Hi, this is a string!';
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/


let random = Math.floor((Math.random() * 20));
// console.log(random);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
let me = {
  name: 'Ardi',
  surname: 'Germenji',
  age: 30,
};

// console.log(me);

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete me.age;
// console.log(me);

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

me['skills'] = ['Js', 'Html', 'Css']
// console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/


me['skills'].pop()
// console.log(me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/


let dice = () => Math.floor((Math.random() * 6) + 1);

function dice2() {
  return Math.floor(Math.random() * 6)
};

let dice3 = function () {
  return Math.floor(Math.random() * 6)
}

// console.log(dice());
// console.log(dice2());
// dice3()


/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

let whoIsBigger = (num1, num2) => num1 > num2 ? num1 : num2;
// console.log(whoIsBigger(3, 1));
// console.log(whoIsBigger(3, 5));
// console.log(whoIsBigger(3, 3));


/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
function splitMe(str) {
  return str.split(' ');
}
let splitMe2 = (str) => str.split(' ');
let splitMe3 = (str) => console.log(str.split(' '));;

// console.log(splitMe('Sphynx cats rocks!'));
// console.log(splitMe2('Morty is the cutest sphynx cat'));
// splitMe3('ciao questa è la terza prova')

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

let deleteOne = (str, bool) => bool ? str.slice(1) : str.slice(0, str.length - 1);
// console.log(deleteOne('ciaone', true));
// console.log(deleteOne('ciaone', false));

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

function onlyLetters(str) {
  // splitting the string into an array
  let arrayOfChar = str.split('');
  // initializing an empty array ready to receive the letters 
  let arrayOfStrings = [];
  for (i = 0; i < arrayOfChar.length; i++) {
    // parseInt runned over a string should return NaN
    // isNaN return true if the the argument is not a number
    if (isNaN(parseInt(arrayOfChar[i]))) {
      // if it's NaN, then it's string, so push in the array
      arrayOfStrings.push(arrayOfChar[i])
    }
  };
  return arrayOfStrings.join('')
};



// console.log(onlyLetters('I love morty123 whate123ver'));


/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
function isThisAnEmail(string) {
  // ! To Do
  // an email should have an @ and some .something
  // if the @is missing the email it's not valid
  // if the .something is missing the email it's not valid
  // the 2 previous cond must be both true
  // the .must be after the @ (slice)
  if (string.indexOf('@') !== -1 && string.slice(string.indexOf('@', 0) + 1).includes('.com')) {
    return true
  } else {
    return false
  }

}

// console.log(isThisAnEmail('string@sd.com'));
// let email = 'ciao@gmail.com';
// console.log(email.slice(email.indexOf('@', 0)));
// console.log(email.includes('@'));
// console.log(email.includes('.' + ''));
// console.log(email.match(/[.com]/g));
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/


let WhatDayIsIt = (arrDate) => {
  let date = new Date();
  let day = date.getDay();
  let dayOfWeek;

  switch (true) {
    case day === 0:
      dayOfWeek = 'sunday'

      break;
    case day === 1:
      dayOfWeek = 'monday'
      break;
    case day === 2:
      dayOfWeek = 'tuesday'
      break;
    case day === 3:
      dayOfWeek = 'wednesday'
      break;
    case day === 4:
      dayOfWeek = 'thursday'
      break;
    case day === 5:
      dayOfWeek = 'friday'
      break;
    case day === 6:
      dayOfWeek = 'saturday'
      break;
    default:
      break;
  }
  return dayOfWeek;
};

// console.log(WhatDayIsIt());


/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

function RollTheDices(num) {
  let diceRoll = {
    sum: 0,
    values: []
  };
  for (let i = 0; i < num; i++) {
    let roll = dice();
    diceRoll.sum += roll;
    diceRoll.values.push(roll)

  }
  return diceRoll;
}

// console.log(RollTheDices(5));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

// date format year,month,day
function HowManyDays(year, month, day) {

  let today = {
    year: 2020,
    month: 10,
    day: 02,
  }

  let daysPassed;
  let monthsDifference = (today.month - month) * 30;
  let yearsDifference = (today.year - year) * 365;
  daysPassed = (today.day - day) + monthsDifference + yearsDifference;

  return daysPassed

}

// console.log(HowManyDays(2020, 10, 1));
// console.log(HowManyDays(2020, 09, 30));


/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

function IsTodayMyBDay(year, month, day) {
  let today = {
    year: 2020,
    month: 10,
    day: 02,
  }
  return today.month === month && today.day === day;

}

// console.log(IsTodayMyBDay(2020, 10, 02));
// console.log(IsTodayMyBDay(2020, 6, 02));
// console.log(IsTodayMyBDay(2020, 10, 5));

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

function deleteProp(object, string) {
  delete object[string];
  return object;
};

// console.log(deleteProp({
//   firstName: 'ardi',
//   lastName: 'bello',
//   age: 18
// }, 'firstName'));
// console.log(deleteProp({
//   firstName: 'ardi',
//   lastName: 'bello',
//   age: 18
// }, 'age'));

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [{
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

const olderMovie = function () {
  // console.log('i work: ', movies[0]['Year']);
  for (let i = 0; i < movies.length; i++) {
    // all movie obects have year prop which need to be parsInt()
    // i can use bubble sort
    for (let j = 0; j < movies.length - i - 1; j++) {
      let temp = 0;
      if (movies[j]['Year'] > movies[j + 1]['Year']) {
        temp = movies[j]
        movies[j] = movies[j + 1]
        movies[j + 1] = temp
      }

    }
  }
  return movies[0]
}

const olderMovieAlternative = function () {
  // % smarter because cycles the array only one time

  let result = {
    year: 2100
  }
  for (i = 0; i < movies.length; i++) {
    let currentMovie = movies[i]
    let currentYear = parseInt(currentMovie.Year)
    if (currentYear < result.year) {
      result = currentMovie
    }
  }
  return result
}


// console.log(olderMovie());
// console.log('OLDERMOVIE ALTERNATIVE', olderMovieAlternative());

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
let countMovies = () => movies.length;
// console.log(countMovies());

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

let onlyTitles = () => {
  let titlesArray = [];

  // this works
  // for (let movie of movies) {
  //   titlesArray.push(movie.Title);
  // }

  // ! this not cannot read the title propriety, the i was missing in i < movie.length
  for (let i = 0; i < movies.length; i++) {
    let currentMovie = movies[i]
    titlesArray.push(currentMovie.Title);
  }
  return titlesArray;
}
// console.log(onlyTitles());

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

function onlyThisMillennium() {
  // loop through the objects in the array
  // check if the Year propriety is >= 2000
  let millennium = [];
  for (let movie of movies) {
    if (parseInt(movie.Year) >= 2000) {
      // millennium.push(movie.Title + ': ' + movie.Year)
      millennium.push(`${movie.Title}: ${movie.Year}`)
    };
  };
  return millennium
};

// console.log(onlyThisMillennium());


/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

function getMovieById(id) {
  let matchingID;
  for (let movie of movies) {
    if (movie.imdbID === id) {
      matchingID = `${movie.Title}: ${movie.imdbID}`;
    } else {
      continue;
    };
  };
  if (matchingID) {
    return matchingID;
  } else {
    return 'There is no a movie with matching ID'
  };

}

// console.log(getMovieById('tt0057261'));
// console.log(getMovieById('459085fjf'));
// console.log(getMovieById('tt0120737'));

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

function sumYears() {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
  return sum
}

// console.log(sumYears());

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
function searchMovie(string) {
  let arrayOfMovies = []
  /*
  for (let movie of movies) {
    if ((movie.Title.toLowerCase()).indexOf(string.toLowerCase()) !== -1) {
      arrayOfMovies.push(movie.Title)
    } else {
      continue;
    }
  }
  if (arrayOfMovies.length === 0) {
    return 'string not found'
  } else {
    return arrayOfMovies
  }
  */
  //  alternative
  for (let movie of movies) {
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      arrayOfMovies.push(movie.Title)
    }
  }
  return arrayOfMovies.length > 0 ? arrayOfMovies : 'search not found'


}
console.log(searchMovie('avengersfdf'));
// console.log(searchMovie('random'));
// console.log(searchMovie('random string'));

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

function searchAndDivide(string) {
  let obj = {
    match: [],
    nonMatch: []
  }
  for (let movie of movies) {
    if ((movie.Title.toLowerCase()).indexOf(string.toLowerCase()) !== -1) {
      obj.match.push(movie.Title)
    } else {
      obj.nonMatch.push(movie.Title)
    }


  }

  return obj
  // &need to check  for random strings
  // if (obj.nonMatch.length === 0 && obj.match.length === 0) {
  //   return 'string not found'
  // } else {


  // }

}

// console.log(searchAndDivide('avengers'));
// console.log(searchAndDivide('rings'));
// console.log(searchAndDivide('random string'));

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

function deleteX(num) {
  movies.splice(num, 1)
  return movies

}
// console.log(movies.length);
// console.log(deleteX(5));
// console.log(movies.length);


// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

function halfTree(height) {
  let char = '*'
  for (let i = 1; i <= height; i++) {
    console.log(char.repeat(i));
  }
}
// halfTree(5)


/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

// function tree(height) {
//   const char = '0';
//   const space = ' ';
//   for (i = 1; i <= height; i++) {
//     console.log(object);
//   }

// }

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

// isItPrime = (num) => {
//   if (num % === 0 && )
// }
// isItPrime()