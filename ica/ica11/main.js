const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 34 fahrenheit in January when me and my buddies went to Dublin for vacation. We went to :inserty: and :insertx: got way too drunk. On the walk back :insertx: fell into the river and :insertz:. Bob and the rest of us ran along the river trying to catch him, but instead we found a leprechaun who told us to go back to the bars. Nobody could pull :insertx: out anyway because he weighs 300 pounds.";
const insertX = ["Big Mike", "Tommy", "Sully"];
const insertY = ["Temple Bar", "a tiny pub on Grafton Street", "an old pub by the docks"];
const insertZ = ["floated away singing", "started yelling for his mom", "tried to swim with the ducks"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature =  Math.round((34 - 32) * 5 / 9) + " centigrade";
    newStory = newStory.replaceAll("34 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
