const messages = [
  'A hidden door is waiting behind the third mirror.',
  'Whispers in the dark speak of an unclaimed treasure.',
  'Tonight, the moonlight reveals what shadows conceal.',
  'A secret name will appear when you stop looking for answers.',
  'The box knows the path; the choice is yours to follow.',
  'Listen for the sound of silence before the clock strikes nine.',
  'The mystery dissolves only when you light your own inner flame.',
  'Some truths arrive wrapped in riddles and soft thunder.',
  'A forgotten memory stirs beneath the dust of old stories.',
  'The final clue hides in plain sight, reflected by your fears.'
];

const revealButton = document.getElementById('revealButton');
const messageElement = document.getElementById('message');

revealButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const text = messages[randomIndex];

  messageElement.innerHTML = `<span>${text}</span>`;
  messageElement.style.animation = 'pulseGlow 0.9s ease-in-out';

  setTimeout(() => {
    messageElement.style.animation = '';
  }, 900);
});
