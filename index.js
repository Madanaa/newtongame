const dino = document.getElementById("student");
const rock = document.getElementById("newton");
const score = document.getElementById("score");

function jump() {
  student.classList.add("jump-animation");
  setTimeout(() =>
    student.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!student.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const studentTop = parseInt(window.getComputedStyle(student)
    .getPropertyValue('top'));
  const newtonLeft = parseInt(window.getComputedStyle(newton)
    .getPropertyValue('left'));
  score.innerText++;

  if (newtonLeft < 0) {
    newton.style.display = 'none';
  } else {
    newton.style.display = ''
  }

  if (newtonLeft < 50 && newtonLeft > 0 && studentTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
