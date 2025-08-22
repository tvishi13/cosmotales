
// ✅ Space Quiz Questions
const questions = [
  { q: "Which planet has the longest day?", options: ["Jupiter", "Venus", "Mars", "Neptune"], answer: "Venus" },
  { q: "Who is the Roman god of war?", options: ["Apollo", "Mars", "Zeus", "Saturn"], answer: "Mars" },
  { q: "Which space agency launched James Webb?", options: ["ISRO", "NASA", "ESA", "Roscosmos"], answer: "NASA" },
  { q: "What type of star is the Sun?", options: ["Red Dwarf", "Neutron", "Yellow Dwarf", "Blue Giant"], answer: "Yellow Dwarf" },
  { q: "Which planet has most moons?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Saturn" },
  { q: "What galaxy do we live in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: "Milky Way" },
  { q: "Which is the hottest planet?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Venus" },
  { q: "First person in space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Valentina Tereshkova"], answer: "Yuri Gagarin" },
  { q: "Which planet rotates on its side?", options: ["Uranus", "Neptune", "Mars", "Earth"], answer: "Uranus" },
  { q: "What is a black hole?", options: ["Planet", "Star", "Void", "Singularity"], answer: "Singularity" },
    { q: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: "Mercury" },
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { q: "What do we call a group of stars that form a pattern?", options: ["Cluster", "Galaxy", "Constellation", "Orbit"], answer: "Constellation" },
  { q: "What is Earth’s only natural satellite?", options: ["The Moon", "Phobos", "Titan", "Europa"], answer: "The Moon" },
  { q: "Which planet has a giant storm called the Great Red Spot?", options: ["Jupiter", "Neptune", "Saturn", "Uranus"], answer: "Jupiter" },
  { q: "Which planet has beautiful rings made of ice and rock?", options: ["Uranus", "Jupiter", "Neptune", "Saturn"], answer: "Saturn" },
  { q: "What kind of object is the Sun?", options: ["Planet", "Moon", "Star", "Asteroid"], answer: "Star" },
  { q: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Chris Hadfield"], answer: "Neil Armstrong" },
  { q: "What is the name of our galaxy?", options: ["Milky Way", "Andromeda", "Whirlpool", "Star Cloud"], answer: "Milky Way" },
  { q: "Which is the smallest planet in the solar system?", options: ["Pluto", "Mars", "Mercury", "Venus"], answer: "Mercury" },
  { q: "True or False: All planets orbit the Sun.", options: ["True", "False"], answer: "True" },
  { q: "Which planet is tilted so far it spins on its side?", options: ["Uranus", "Neptune", "Saturn", "Mars"], answer: "Uranus" },
  { q: "Which planet is famous for its rings?", options: ["Neptune", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
  { q: "What do astronauts need to breathe in space?", options: ["Oxygen tanks", "Water", "Gravity boots", "Rocket fuel"], answer: "Oxygen tanks" },
  { q: "What is a shooting star?", options: ["A real star", "A spaceship", "A meteor", "A comet"], answer: "A meteor" },
  { q: "What keeps the planets orbiting around the Sun?", options: ["Wind", "Gravity", "Rockets", "Light"], answer: "Gravity" },
  { q: "Which planet is known for its tilted axis?", options: ["Mars", "Venus", "Uranus", "Jupiter"], answer: "Uranus" },
  { q: "Which planet is covered in thick yellow clouds?", options: ["Mars", "Venus", "Jupiter", "Earth"], answer: "Venus" },
  { q: "What is the Sun mostly made of?", options: ["Lava", "Rocks", "Gas", "Metal"], answer: "Gas" },
  { q: "What is the name of the path a planet takes around the Sun?", options: ["Spin", "Loop", "Rotation", "Orbit"], answer: "Orbit" },
  { q: "Which planet is farthest from the Sun?", options: ["Uranus", "Neptune", "Saturn", "Pluto"], answer: "Neptune" },
  { q: "Which planet has the nickname 'Earth's Twin'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
  { q: "True or False: The Moon makes its own light.", options: ["True", "False"], answer: "False" },
  { q: "What is the name of the robot that explored Mars?", options: ["Discovery", "Apollo", "Curiosity", "Enterprise"], answer: "Curiosity" }
];

const planetData = {
  Mercury: {
    title: "☿️ MERCURY – The Speedy Baked Potato",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 1st</li>
        <li><strong>Type:</strong> Terrestrial (rocky)</li>
        <li><strong>Diameter:</strong> 4,879 km</li>
        <li><strong>Day:</strong> 59 Earth days</li>
        <li><strong>Year:</strong> 88 Earth days</li>
        <li><strong>Moons:</strong> None</li>
        <li><strong>Temperature:</strong> 430°C / -180°C</li>
        <li><strong>Surface:</strong> Cratered like the Moon</li>
        <li><strong>Atmosphere:</strong> Thin exosphere</li>
        <li><strong>Fun Fact:</strong> Has ice in shadowed craters!</li>
      </ul>`
  },
  Venus: {
    title: "♀️ VENUS – The Hottest Planet (And Earth’s Evil Twin!)",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 2nd</li>
        <li><strong>Diameter:</strong> 12,104 km</li>
        <li><strong>Day:</strong> 243 Earth days (longer than year!)</li>
        <li><strong>Year:</strong> 225 Earth days</li>
        <li><strong>Temperature:</strong> ~475°C</li>
        <li><strong>Atmosphere:</strong> CO₂ with sulfuric acid clouds</li>
        <li><strong>Fun Fact:</strong> Spins backward!</li>
        <li><strong>Volcanoes:</strong> 1,600+ (maybe active)</li>
        <li><strong>Pressure:</strong> Like 900m underwater!</li>
      </ul>`
  },
  Earth: {
    title: "🌍 EARTH – Our Amazing Home",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 3rd</li>
        <li><strong>Diameter:</strong> 12,742 km</li>
        <li><strong>Day:</strong> 24 hours</li>
        <li><strong>Year:</strong> 365.25 days</li>
        <li><strong>Moons:</strong> 1</li>
        <li><strong>Surface:</strong> 70% water, 30% land</li>
        <li><strong>Atmosphere:</strong> Nitrogen & Oxygen</li>
        <li><strong>Fun Fact:</strong> Only planet with pizza! 🍕</li>
        <li><strong>Bonus:</strong> Moon helps protect Earth.</li>
      </ul>`
  },
  Mars: {
    title: "♂️ MARS – The Red Dusty Adventurer",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 4th</li>
        <li><strong>Diameter:</strong> 6,779 km</li>
        <li><strong>Day:</strong> 24.6 hours</li>
        <li><strong>Year:</strong> 687 Earth days</li>
        <li><strong>Moons:</strong> 2 (Phobos & Deimos)</li>
        <li><strong>Surface:</strong> Dusty, canyons, volcanoes</li>
        <li><strong>Atmosphere:</strong> Thin CO₂</li>
        <li><strong>Fun Fact:</strong> Olympus Mons = biggest volcano!</li>
        <li><strong>Robots:</strong> Perseverance & Curiosity are exploring!</li>
      </ul>`
  },
  Jupiter: {
    title: "♃ JUPITER – The Gigantic Gas King",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 5th</li>
        <li><strong>Diameter:</strong> 139,820 km</li>
        <li><strong>Day:</strong> 10 hours (fastest)</li>
        <li><strong>Year:</strong> 12 Earth years</li>
        <li><strong>Moons:</strong> 95+ (Ganymede is largest)</li>
        <li><strong>Atmosphere:</strong> Hydrogen & helium</li>
        <li><strong>Great Red Spot:</strong> Giant storm 3x Earth</li>
        <li><strong>Rings:</strong> Yes, faint</li>
        <li><strong>Fun Fact:</strong> Ganymede is bigger than Mercury!</li>
      </ul>`
  },
  Saturn: {
    title: "♄ SATURN – The Ring Superstar",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 6th</li>
        <li><strong>Diameter:</strong> 116,460 km</li>
        <li><strong>Day:</strong> 10.7 hours</li>
        <li><strong>Year:</strong> 29.5 Earth years</li>
        <li><strong>Moons:</strong> 140+ (Titan is largest)</li>
        <li><strong>Rings:</strong> Brightest, made of ice & dust</li>
        <li><strong>Fun Fact:</strong> Titan has methane lakes!</li>
        <li><strong>Weird Fact:</strong> Saturn could float in water!</li>
      </ul>`
  },
  Uranus: {
    title: "♅ URANUS – The Icy Tilted Oddball",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 7th</li>
        <li><strong>Diameter:</strong> 50,724 km</li>
        <li><strong>Day:</strong> 17 hours</li>
        <li><strong>Year:</strong> 84 Earth years</li>
        <li><strong>Moons:</strong> 27</li>
        <li><strong>Rings:</strong> 13 narrow ones</li>
        <li><strong>Atmosphere:</strong> Hydrogen, helium, methane</li>
        <li><strong>Weirdest Feature:</strong> Spins sideways (98° tilt!)</li>
      </ul>`
  },
  Neptune: {
    title: "♆ NEPTUNE – The Dark Blue Wind Machine",
    description: `
      <ul>
        <li><strong>Order from Sun:</strong> 8th</li>
        <li><strong>Diameter:</strong> 49,244 km</li>
        <li><strong>Day:</strong> 16 hours</li>
        <li><strong>Year:</strong> 165 Earth years</li>
        <li><strong>Moons:</strong> 14 (Triton is largest)</li>
        <li><strong>Winds:</strong> Up to 2,100 km/h!</li>
        <li><strong>Atmosphere:</strong> Hydrogen, helium, methane</li>
        <li><strong>Storms:</strong> Dark spots like Jupiter’s</li>
      </ul>`
  }
};


// ✅ Planet Info Card Logic
const planetCards = document.querySelectorAll('.planet-card');
const infoCard = document.getElementById('planet-info-card');
const infoTitle = document.getElementById('info-planet-title');
const infoDesc = document.getElementById('info-planet-description');

planetCards.forEach(card => {
  card.addEventListener('click', () => {
    const planetName = card.querySelector('p').textContent.trim();
    const data = planetData[planetName];
    if (data) {
      infoTitle.innerHTML = data.title;
      infoDesc.innerHTML = data.description;
      infoCard.classList.add('show');
    }
  });
});



let selected = [], currentQuestion = 0, score = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreSummary = document.getElementById('score-summary');
const playAgainBtn = document.getElementById('play-again-btn');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  console.log("✅ startQuiz() is running");
  selected = shuffle([...questions]).slice(0, 5);
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  optionsEl.style.display = "block";
  feedbackEl.style.display = "block";
  scoreSummary.style.display = "none";
  playAgainBtn.style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  const q = selected[currentQuestion];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";


  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option === q.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, isCorrect) {
  feedbackEl.textContent = isCorrect ? "✅ Correct!" : `❌ Wrong! Answer: ${selected[currentQuestion].answer}`;
  feedbackEl.style.color = isCorrect ? "#00ff99" : "#ff6666";
 
  if (isCorrect) score++;
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < selected.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
};

function endQuiz() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  feedbackEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreSummary.style.display = "block";
  scoreSummary.innerHTML = `<h3>Your Score: ${score} / ${selected.length}</h3>`;
  playAgainBtn.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
  playAgainBtn.onclick = () => startQuiz();
  startQuiz();
});

// ✅ Drawing on Canvas (like MS Paint)
const paintCanvas = document.getElementById('paintCanvas');
const paintCtx = paintCanvas.getContext('2d');
let painting = false;
let currentColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;
let isEraser = false;

paintCanvas.addEventListener('mousedown', () => painting = true);
paintCanvas.addEventListener('mouseup', () => painting = false);
paintCanvas.addEventListener('mouseleave', () => painting = false);
paintCanvas.addEventListener('mousemove', draw);

document.getElementById('colorPicker').addEventListener('input', e => {
  currentColor = e.target.value;
  isEraser = false;
});
document.getElementById('brushSize').addEventListener('input', e => {
  brushSize = e.target.value;
});
document.getElementById('eraser').addEventListener('click', () => {
  isEraser = true;
  currentColor = '#1c1f30';
});
document.getElementById('clearCanvas').addEventListener('click', () => {
  paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
});
document.getElementById('saveDrawing').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'my_planet_art.png';
  link.href = paintCanvas.toDataURL();
  link.click();
});

function draw(e) {
  if (!painting) return;
  paintCtx.fillStyle = currentColor;
  paintCtx.beginPath();
  paintCtx.arc(e.offsetX, e.offsetY, brushSize / 2, 0, Math.PI * 2);
  paintCtx.fill();
}
function closePlanetCard() {
  const card = document.getElementById('planet-info-card');
  if (card) {
    card.classList.remove('show');
    card.classList.add('hidden');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const planetCards = document.querySelectorAll('.planet-card');
  const infoCard = document.getElementById('planet-info-card');
  const infoTitle = document.getElementById('info-planet-title');
  const infoDesc = document.getElementById('info-planet-description');

  planetCards.forEach(card => {
    card.addEventListener('click', () => {
      const planetName = card.querySelector('p').textContent.trim();
      const data = planetData[planetName];
      if (data) {
        infoTitle.innerHTML = data.title;
        infoDesc.innerHTML = data.description;
        infoCard.classList.add('show');
        infoCard.classList.remove('hidden');
      }
    });
  });
});
