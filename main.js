import movieIdeas from './assets/data.js'

console.log(movieIdeas);

const btnEl = document.getElementById('btn');
const movieEl = document.getElementById('movie')
const dishEl = document.getElementById('dish')
const cocktailEl = document.getElementById('cocktail')
const recipeEl = document.getElementById('recipe')
const pinkEls = document.querySelectorAll('.pink')
const blueEls = document.querySelectorAll('.blue')
const greenEls = document.querySelectorAll('.green')
const yellowEls = document.querySelectorAll('.yellow')
const barsContainer = document.getElementById('bars-container');





btnEl.addEventListener('click', generateIdea) 

function fillRecipe(idea) {
    recipeEl.innerHTML = "";

    idea.recipe.forEach((recipe) => {
        let li = document.createElement("li");
        li.innerHTML = `<h2>${recipe}</h2>`;
        recipeEl.appendChild(li);
    });
}

function applyClassToElements(elements, className) {
    elements.forEach((element) => {
        element.classList.add(className);
    });
}

function generateIdea(){
    barsContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * movieIdeas.length);
    const randomIdea = movieIdeas[randomIndex];
    
    movieEl.innerText = `${randomIdea.movie}`
    movieEl.className='neon'
    dishEl.innerText = `${randomIdea.food}`
    dishEl.className='neon-blue'
    cocktailEl.innerText = `${randomIdea.cocktail}`;
    cocktailEl.className='neon-green';
    applyClassToElements(pinkEls, 'pink-on');
    applyClassToElements(blueEls, 'blue-on');
    applyClassToElements(greenEls, 'green-on');
    applyClassToElements(yellowEls, 'yellow-on');

    fillRecipe(randomIdea);

    const barCount = 18;

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.classList.add(`bar-${i % 6 + 1}`);
        barsContainer.appendChild(bar);
    }
}


function reset(){
    movieEl.innerText = ""
    dishEl.innerText = ""
    cocktailEl.innerText = ""
    recipeEl.innerHTML = ""
}