import movieIdeas from './assets/data.js'

console.log(movieIdeas);

const btnEl = document.getElementById('btn');
const movieEl = document.getElementById('movie')
const dishEl = document.getElementById('dish')
const cocktailEl = document.getElementById('cocktail')


btnEl.addEventListener('click', generateIdea) 

function generateIdea(){
    const randomIndex = Math.floor(Math.random() * movieIdeas.length);
    const randomIdea = movieIdeas[randomIndex];
    
    movieEl.innerText = `${randomIdea.movie}`
    movieEl.className='neon'
    dishEl.innerText = `${randomIdea.food}`
    dishEl.className='neon-blue'
    cocktailEl.innerText = `${randomIdea.cocktail}`;
    cocktailEl.className='neon-green';
}