// script.js
function updateCountdown() {
    // Tug'ilgan kunning sanasi
    const birthdayDate = new Date('2025-08-17T00:12:00'); // Tug'ilgan kun sanasini belgilang

    const now = new Date();
    const timeDifference = birthdayDate - now;

    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = "Tug'ilgan kun o'tib ketdi!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${days} kun ${hours} soat ${minutes} minut ${seconds} sekond`;
}

// Har 1 soniyada sanagichni yangilash
setInterval(updateCountdown, 1000);
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');

    // Zarni random raqam bilan to‘ldirish
    const rollDice = () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        dice.innerText = randomNumber;
    };

    // Zar animatsiyasi
    const showDice = () => {
        dice.classList.add('dice-roll');
        rollDice();

        // Animatsiya tugagandan keyin zarni yashirish
        setTimeout(() => {
            dice.classList.remove('dice-roll');
        }, 2000);
    };

    // Sahifa yuklanganda animatsiyani ko‘rsatish
    showDice();
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');

    const rollDice = () => {
        const numbers = ['🎲', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        dice.innerText = randomNumber;
    };

    const showDice = () => {
        dice.classList.add('dice-roll');
        rollDice();

        setTimeout(() => {
            dice.classList.remove('dice-roll');
        }, 2000); // Animatsiya davomiyligi
    };

    showDice();
});

