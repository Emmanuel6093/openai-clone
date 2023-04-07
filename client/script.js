import bot from './assets/bot.svg'; 
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

// generates loading dots appear 1 by 1.
function loader(element) {
  element.textContent = '.'

  loadInterval = setInterval (() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '.';
    }
  }, 300)
}

// makes text appear in type animation 1 by 1.
function typeText (element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

// always generates random ID.
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

// changes message stripe based on who is AI & User, also displays icon on who is AI & User. 
function chatStripe(isAi, value, uniqueId) {
  return (
    `
    <div> class='wrapper ${isAi && 'ai'}'>
      <div class='chat'>
        <div class='profile'>
        <img 
          src='${isAi ? bot : user}'
          alt='${isAi ? 'bot' : 'user'}'
        />
        </div>
        <div class='message' id='${uniqueId}'>${value}</div>
      </div>
    </div>

    `
  )
}