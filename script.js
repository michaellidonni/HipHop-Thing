window.addEventListener('click', () => {
    const audio = document.getElementById('introSong');
    audio.play();
}, { once: true });

function mute() {
    const audio = document.getElementById('introSong');
    const btnImg = document.getElementById('muteButton');

    if (audio.muted) {
        audio.muted = false;
        btnImg.src = 'imgs/play.png';
    } else {
        audio.muted = true;
        btnImg.src = 'imgs/mute.png'
    }
}

const artists = [
    { name: "DJ Kool Herc", era: "1970s", img: "imgs/dj-kool-herc.jpg" },
    { name: "Grandmaster Flash", era: "1980s", img: "imgs/grandmasster-flash.jpg" },
    { name: "Tupac Shakur", era: "1990s", img: "imgs/tupac.jpg" },
    { name: "Jay-Z", era: "2000s", img: "imgs/jayz.jpg" },
    { name: "Kendrick Lamar", era: "2010s", img: "imgs/kendrick.jpg" },
    { name: "Playboi Carti", era: "2020s", img: "imgs/carti.jpg" }
];

function generateArtistCards() {
    const container = document.getElementById('artistContainer');

    artists.forEach(artist => {
        container.innerHTML += `
        <div class="col-md-4 col-lg-4">
          <div class="card hologram-card">
            <img src="${artist.img}" class="card-img-top" 
            <div class="card-body">
              <h5 class="card-title text-align-center ">${artist.name}</h5>
              <p class="card-text text-align-center text-dark">${artist.era}</p>
            </div>
          </div>
        </div>
      `;
    });
}

window.addEventListener('DOMContentLoaded', generateArtistCards);

const questions = [
    {
        question: "1. In what year did hip-hop start?",
        options: ["1980", "1973", "1990", "1965"],
        answer: "1973"
    },
    {
        question: "2. Who is the 'Father of Hip-Hop'?",
        options: ["Dr. Dre", "DJ Kool Herc", "Tupac", "Run DMC"],
        answer: "DJ Kool Herc"
    },
    {
        question: "3. Where did hip-hop begin?",
        options: ["Queens", "The Bronx", "Brooklyn", "Harlem"],
        answer: "The Bronx"
    },
    {
        question: "4. What was the first successful hip-hop single?",
        options: ["The Message", "Rapper's Delight", "Juicy", "Walk This Way"],
        answer: "Rapper's Delight"
    },
    {
        question: "5. What’s the hip-hop dance style called?",
        options: ["Popping", "Breaking", "Locking", "Tutting"],
        answer: "Breaking"
    }
];

let current = 0;
let score = 0;
const quiz = document.getElementById("quiz");
const scoreText = document.getElementById("score");

function showQuestion() {
    if (current >= questions.length) {
        quiz.innerHTML = "";
        scoreText.textContent = "You scored " + score + " out of " + questions.length + "!";
        return;
    }

    const q = questions[current];
    let html = "<h3>" + q.question + "</h3>";
    q.options.forEach(option => {
        html += `<button onclick="checkAnswer('${option}')">${option}</button><br>`;
    });
    quiz.innerHTML = html;
}

function checkAnswer(selected) {
    if (selected === questions[current].answer) {
        score++;
    }
    current++;
    showQuestion();
}

showQuestion();