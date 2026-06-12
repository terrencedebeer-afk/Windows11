/**
 * Random Joke Generator
 * Uses the Official Joke API (https://official-joke-api.appspot.com)
 * 
 * This script fetches random jokes and displays them in the console.
 * It supports different joke types: general, programming, and knock-knock jokes.
 */

// Fetch a random joke from the Official Joke API
async function getRandomJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const joke = await response.json();
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
}

// Fetch a random programming joke
async function getProgrammingJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const joke = await response.json();
    return Array.isArray(joke) ? joke[0] : joke;
  } catch (error) {
    console.error('Error fetching programming joke:', error);
    return null;
  }
}

// Fetch a random knock-knock joke
async function getKnockKnockJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/knock-knock/random');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const joke = await response.json();
    return Array.isArray(joke) ? joke[0] : joke;
  } catch (error) {
    console.error('Error fetching knock-knock joke:', error);
    return null;
  }
}

// Display joke in a formatted way
function displayJoke(joke) {
  if (!joke) {
    console.log('Failed to fetch a joke. Try again!');
    return;
  }
  
  console.log('\n========== 😂 JOKE ==========');
  console.log(`Setup: ${joke.setup}`);
  console.log(`Punchline: ${joke.punchline}`);
  console.log(`Type: ${joke.type}`);
  console.log('=============================\n');
}

// Main function to demonstrate the joke generator
async function main() {
  console.log('🎭 Random Joke Generator\n');
  
  // Get a random general joke
  console.log('Fetching a random joke...');
  const randomJoke = await getRandomJoke();
  displayJoke(randomJoke);
  
  // Get a programming joke
  console.log('Fetching a programming joke...');
  const programmingJoke = await getProgrammingJoke();
  displayJoke(programmingJoke);
  
  // Get a knock-knock joke
  console.log('Fetching a knock-knock joke...');
  const knockKnockJoke = await getKnockKnockJoke();
  displayJoke(knockKnockJoke);
}

// Run the main function
main().catch(error => console.error('Fatal error:', error));
