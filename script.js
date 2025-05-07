// Play intro song once on the first click anywhere on the page
window.addEventListener('click', () => {
    const audio = document.getElementById('introSong');
    audio.play();
}, { once: true });

// Function to toggle mute/unmute and switch the mute button image
function mute() {
    const audio = document.getElementById('introSong');
    const btnImg = document.getElementById('muteButton');

    if (audio.muted) {
        audio.muted = false;
        btnImg.src = 'imgs/play.png';
    } else {
        audio.muted = true;
        btnImg.src = 'imgs/mute.png';
    }
}

// Array of famous hip-hop artists with name, era, and image
const artists = [
    { name: "DJ Kool Herc", era: "1970s", img: "imgs/dj-kool-herc.jpg" },
    { name: "Grandmaster Flash", era: "1980s", img: "imgs/grandmasster-flash.jpg" },
    { name: "Tupac Shakur", era: "1990s", img: "imgs/tupac.jpg" },
    { name: "Jay-Z", era: "2000s", img: "imgs/jayz.jpg" },
    { name: "Kendrick Lamar", era: "2010s", img: "imgs/kendrick.jpg" },
    { name: "Playboi Carti", era: "2020s", img: "imgs/carti.jpg" }
];

// Function to generate and display artist cards on the webpage
function generateArtistCards() {
    const container = document.getElementById('artistContainer');

    // Loop through each artist and create a card element
    artists.forEach(artist => {
        container.innerHTML += `
        <div class="col-md-4 col-lg-4">
          <div class="card">
            <img src="${artist.img}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-align-center mt-4">${artist.name}</h5>
              <p class="card-text text-align-center">${artist.era}</p>
            </div>
          </div>
        </div>
      `;
    });
}

generateArtistCards();

// Array of quiz questions, each with a question, possible answers, and the correct answer
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
        options: ["The Message", "Rappers Delight", "Juicy", "Walk This Way"],
        answer: "Rappers Delight"
    },
    {
        question: "5. What’s the hip-hop dance style called?",
        options: ["Popping", "Breaking", "Locking", "Tutting"],
        answer: "Breaking"
    }
];

let current = 0; // Current question
let score = 0;   // Total correct answers
const quiz = document.getElementById("quiz");
const scoreText = document.getElementById("score");

// Function to display a question and its answer options
function showQuestion() {
    // If all questions are answered, show the final score
    if (current >= questions.length) {
        quiz.innerHTML = ""; // Clears the quiz content
        scoreText.textContent = "You scored " + score + " out of " + questions.length + "!"; // Shows the score
        return;
    }

    // Get the current question
    const q = questions[current];
    let text = "<h3>" + q.question + "</h3>"; // Display question

    // Create buttons for each option
    q.options.forEach(option => {
        text += `<button onclick="checkAnswer('${option}')">${option}</button><br>`;
    });

    quiz.innerHTML = text; // Update quiz  with new question
}

// Function to check the selected answer and move to the next question
function checkAnswer(selected) {
    if (selected === questions[current].answer) {
        score++; // Add one to score if answer is correct
    }
    current++; // Move to the next question
    showQuestion(); // Display next question or score
}

// Start the quiz
showQuestion();
