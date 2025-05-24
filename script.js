// Select box and reactionTime display element
const box = document.getElementById('box');
const reactionDisplay = document.getElementById('reactionTime');

let startTime; // To store when the box appeared

// Generate a random time delay and show the box
function showBoxAfterDelay() {
  const delay = Math.random() * 3000 + 1000; // 1 to 4 seconds

  setTimeout(() => {
    const top = Math.random() * (window.innerHeight - 120);
    const left = Math.random() * (window.innerWidth - 120);

    box.style.top = `${top}px`;
    box.style.left = `${left}px`;
    box.style.display = 'block';
    box.style.backgroundColor = getRandomColor();

    startTime = new Date().getTime(); // Record the time the box appears
  }, delay);
}

// Get a random color for the box
function getRandomColor() {
  const colors = ['#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// When the box is clicked
box.onclick = () => {
  const endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000;

  reactionDisplay.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;

  box.style.display = 'none'; // Hide the box

  showBoxAfterDelay(); // Start again
};

// Initial trigger
showBoxAfterDelay();
