

var quotes = ['Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. —Norman Vincent Peale', 'If you can dream it, you can do it. —Walt Disney', 'Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open. —Pauline Kael', 'Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. —George Herbert', 'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you. —George Whitefield', 'The future belongs to those who believe in the beauty of their dreams. —Eleanor Roosevelt','Aim for the moon. If you miss, you may hit a star. —W. Clement Stone', 'Don’t watch the clock; do what it does. Keep going. —Sam Levenson', 'There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits. —Michael Phelps', 'Keep your eyes on the stars, and your feet on the ground. —Theodore Roosevelt'];

tweetUrl = "";

var forShareQuote = "";

function newQuote() {
  
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  
  var randQuote = quotes[randomNumber];
  
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  
  forShareQuote = randQuote;
  
  forShareQuote.replace(/\s/g, "+");
  
  tweetUrl = "https://twitter.com/intent/tweet/?text=" + randomNumber;
  
  document.getElementbyId("tweetQuote").setAttribute("href" + tweetUrl);
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors();
});

function colors() {
  let colorArray = [];    

  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}