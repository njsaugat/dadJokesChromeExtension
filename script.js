const getJoke = document.body.querySelector('.btn button');
const jokeEl = document.body.querySelector('.joke');
const spin = document.body.querySelector('.fa-spin');
getJoke.addEventListener('click', generateJoke);

async function generateJoke() {
  jokeEl.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const joke = await fetch(' https://icanhazdadjoke.com', config);
  const actualJoke = await joke.json(); //we get the data then kinda convert into json
  jokeEl.innerHTML = actualJoke.joke; //finally get the json and put into el
}

generateJoke(); // this is done so that when page loads we have a random joke
