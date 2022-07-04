const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });

    if (!response.ok) {
      throw new Error('There is some error');
    }

    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    result.textContent = error.message;
    console.log(error);
  }
};

btn.addEventListener('click', async () => {
  fetchDadJoke();
});

fetchDadJoke();
