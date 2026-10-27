const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went to get pizza. When they got to :inserty:, they saw a giant dog and then :insertz:. Bob saw everything and laughed, because :insertx: weighs 300 pounds and it was a really hot day.";
const insertX = ["Captain Noodle", "Grandma Joe", "Big Steve"];
const insertY = ["the mall", "the beach", "the gas station"];
const insertZ = ["ran away screaming", "fell into the pool", "started dancing on the table"];

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
    const temperature =  Math.round((94 - 32) * 5 / 9) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
