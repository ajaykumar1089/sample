
function toggleStory(card) {
  const story = card.querySelector('.full-story');
  story.style.display = (story.style.display === 'block') ? 'none' : 'block';
}
