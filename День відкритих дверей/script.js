// Допоміжна функція Цезаря
function caesarShift(str, shift) {
    return str.split('').map(c => {
        let code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCharCode((code - 65 + shift) % 26 + 65);
        if (code >= 97 && code <= 122) return String.fromCharCode((code - 97 + shift) % 26 + 97);
        return c;
    }).join('');
}

// Перехід між рівнями
function nextLevel(current, next) {
    document.getElementById(`level${current}`).classList.remove('visible');
    document.getElementById(`level${next}`).classList.add('visible');
}

// Обробка кнопок
document.getElementById('level1Btn').addEventListener('click', () => {
    const val = document.getElementById('level1Input').value.trim().toUpperCase();
    if (val === caesarShift('COLD', 3)) {
        nextLevel(1, 2);
    } else alert('Неправильно!');
});

document.getElementById('level2Btn').addEventListener('click', () => {
    const val = document.getElementById('level2Input').value.trim();
    if (val === '4') {
        nextLevel(2, 3);
    } else alert('Помилка в розрахунках!');
});

// КНОПКА РІКРОЛУ
document.getElementById('skipLevel2').addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

document.getElementById('level3Btn').addEventListener('click', () => {
    const val = document.getElementById('level3Input').value.trim();
    if (val === '2345') {
        nextLevel(3, 4);
        showSecretNumber();
    } else alert('Код не спрацював!');
});

// Генерація фінального номера
function showSecretNumber() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const secret = letters[Math.floor(Math.random()*26)] + 
                   Math.floor(Math.random()*10) + 
                   Math.floor(Math.random()*10) + 
                   letters[Math.floor(Math.random()*26)];
    
    const secretDiv = document.getElementById('secretNumber');
    secretDiv.textContent = secret;
    // ВАЖЛИВО: Ми НЕ ставимо тут стиль color, щоб він брався з CSS (невидимий колір)
}