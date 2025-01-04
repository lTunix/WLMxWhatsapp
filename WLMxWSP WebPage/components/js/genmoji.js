const COUNT = 300;

const sizes = [
    'emoji--s',
    'emoji--s',
    'emoji--s',
    'emoji--s',
    'emoji--m',
    'emoji--m',
    'emoji--m',
    'emoji--m',
    'emoji--m',
    'emoji--l',
    'emoji--l',
    'emoji--xl',
];

const emojis = [
    '😂', '❤️', '😒', '😝', '😡', '😱', '👽', '💀', '💩', '😽', 
    '🐭', '😭', '🤯', '🌟', '🎉', '🦄', '🍕', '🚀', '⚡', '🌈'
];


const emojiRain = document.querySelector('.emoji-rain');
const genRain = (size, xStart, xEnd, yStart, emoji) => {
    const emojis = document.createElement('div');
    emojis.innerText = emoji;
    emojis.classList.add('rainDrop', size);
    emojis.style.setProperty('--x-start', xStart + 'vw');
    emojis.style.setProperty('--x-end', xEnd + 'vw');
    emojis.style.setProperty('--y-start', yStart + 'vh');
    emojis.style.setProperty('--y-end', 100 + 'vh');
    emojis.style.animationDuration = `${Math.random() * 10 + 20}s`;

    return emojis;
};

for (let i = 0; i < COUNT; i++) {
    const size = randFromList(sizes);
    const xStart = getRandom(0, 100);
    const xEnd = getRandom(xStart - 25, xStart + 25);
    const yStart = getRandom(-500, 0);
    const emoji = randFromList(emojis);

    emojiRain.appendChild(genRain(size, xStart, xEnd, yStart, emoji));
}

function randFromList(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
