/* Starting from D6's exercise, use your Smartphone Shop Website and implement the following exercises */

/*EXERCISE 1 
   Create a new welcome alert message when the page successfully loads
  */
window.onload = function () {
    // alert('The Page is loaded!')
    document.querySelector('#shop-id').addEventListener('mouseover', addClassToTitle)
    document.querySelector('#shop-id').onmouseout = removeClassFromTitle
    document.querySelector('#ex-4').onclick = changePContent;
    document.querySelector('#ex-5').onclick = changeListTitle;
    document.querySelector('#ex-6 button').onclick = addToTheSecond;
    document.querySelector('#ex-7 button').onclick = firstUlDisappear;
    document.querySelector('#ex-8 button').onclick = paintItGreen;

    document.querySelector('#ex-10').onclick = toggleShowImages;
    // ex.11
    document.querySelector('#spin-my-color').onclick = makeItClickable;
    // ex.9 
    /*
    let arrayOfTableElements = document.querySelectorAll('.magnifier');
    arrayOfTableElements.forEach((element) => {
        element.addEventListener('mouseenter', makeThemMagnifiable)
    })
    */



};
/* EXERCISE 2
    Write a function to change the Title of the page in something else (execute the function in browser console)
*/
const changeTitle = function (newTitle) {
    let title = document.querySelector('title')
    title.innerText = newTitle
};
/* EXERCISE 3a
    Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
*/
const addClassToTitle = function () {
    let title = document.querySelector('#shop-id')
    title.className = 'red-color'

};


/* EXERCISE 3b
    Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
*/
const removeClassFromTitle = function () {
    document.querySelector('#shop-id').classList.remove('red-color')
};
/* EXERCISE 4
    Add the following html snippet to your page:
        <h2 id="listTitle">Todo List</h2>
        <ul id="firstList">
            <li><p>1st</p></li>
            <li>2nd</li>
            <li>3rd</li>
        </ul>
        <ul id="secondList">
            <li>1st</li>
            <li>2nd</li>
            <li>3rd</li>
        </ul>
        <div>
            <p>This text is just for the exercise</p>
        </div>
Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
*/
const changePContent = function () {
    document.querySelector('div > p').innerText = `I've changed the text of only of this paragraph `
    document.querySelector('div > p').classList.add('red-color')

};

/* EXERCISE 5
    Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
*/
const changeListTitle = function (content) {
    content = document.querySelector('input').value
    document.querySelector('#listTitle').innerText = content;
};
/* EXERCISE 6
     Write a function to add a new item ONLY to the second list (create an input field + add button)
*/
const addToTheSecond = function (content) {
    // console.log('hi work onclick');
    content = document.querySelector('#ex-6 input').value
    let listItem = document.createElement(`li`)
    listItem.innerText = `${content}`
    document.querySelector('#secondList').appendChild(listItem)
};
/* EXERCISE 7
    Write a function to make the first UL disappear (button)
*/
const firstUlDisappear = function () {
    document.querySelector('#firstList').style.display = 'none'
    setTimeout(() => {
        alert('Tada! List one hidden')
    }, 500);

};
/* EXERCISE 8
    Write a function to make the background of every UL green (button)
*/
const paintItGreen = function () {

    let ul = document.querySelectorAll('ul')
    for (let i = 0; i < ul.length; i++) {
        ul[i].classList.add('bg-green')
    }

};

/* EXERCISE 9
    Add a "magnifier function" to the table.
    When the user mouse goes on a table cell (not the image one) the font size must increase.
    HINT use mouseenter / mouseleave events
*/
const makeThemMagnifiable = function () {
    // creating array of elements
    let arrayToMagnify = document.querySelectorAll('.magnifier');
    // looping through each element
    // adding event
    // updating class on event trigger
    // looping again to do the the same process with mouseleave
    for (let i = 0; i < arrayToMagnify.length; i++) {
        arrayToMagnify[i].addEventListener('mouseenter', () => {
            arrayToMagnify[i].classList.add('magnified-rem')
        })

    }
    for (let i = 0; i < arrayToMagnify.length; i++) {
        arrayToMagnify[i].addEventListener('mouseleave', () => {
            arrayToMagnify[i].classList.remove('magnified-rem')
        })

    }

    // doesn't work because every element has already the event on it (added in window.onload) and when the event triggers it calls the function on each element, magnifying all of them
    // for (i = 0; i < arrayToMagnify.length; i++) {

    // }
    // arrayToMagnify.style.fontSize = 'x-large';

    // let minify = function () {
    //     arrayToMagnify.forEach((elementToMinify) => {
    //         elementToMinify.style.fontSize = 'initial'
    //     })
    // };

    // arrayToMagnify.forEach((elementToMagnify) => {
    //     elementToMagnify.style.fontSize = 'x-large'
    // })
}

makeThemMagnifiable()








// elementToMagnify.classList.add('magnified-rem')




// arrayToMagnify.forEach((elementToMinify) => {
//     elementToMinify.addEventListener('mouseleave', minify)
// }

// let minify = () => {
//     arrayToMagnify.forEach((elementToMinify) => {
//         elementToMinify.style.fontSize = 'initial'
//     })
// }

// arrayToMagnify.forEach((elementToMinify) => {
//     elementToMinify.addEventListener('mouseleave', minify)
// })




// !let tHead = document.querySelector('th')
// let tData = document.querySelectorAll('td')
// tHead.classList.add('magnified')
// for (let i = 0; i < tHead.length; i++) {
//     tHead[i].classList.add('magnified')
// }

// for (let i = 0; i < tData.length; i++) {
//     tData[i].classList.add('magnified')
// }



/* EXERCISE 10
    Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
*/
const toggleShowImages = function () {
    let imgArr = document.querySelectorAll('img')
    for (let image of imgArr) {
        image.classList.toggle('hide-img')
    }
    // css added to hide
};

//##### EXTRA

/* EXERCISE 11
    Make the heading of the page change color radomly every time the user clicks on it
    */
const makeItClickable = function () {
    let randomRed = Math.ceil(Math.random() * 255)
    let randomGreen = Math.ceil(Math.random() * 255)
    let randomBlue = Math.ceil(Math.random() * 255)
    document.querySelector('#spin-my-color').style.color = `rgb(${randomRed},${randomGreen},${randomBlue})`

};

/*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/