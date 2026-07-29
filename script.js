const lines = document.querySelectorAll('.loading-text p');
const button = document.getElementById('enterBtn');

button.style.opacity = '0';
button.style.pointerEvents = 'none';

lines.forEach(line => {
    line.textContent = '';
});

const messages = [
    'Initializing...',
    'Loading Memory Engine...',
    'Scanning Developer...',
    'Developer Found ❤️'
];

function typeLine(element, text, callback) {
    let i = 0;

    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(interval);

            setTimeout(callback, 400);
        }

    }, 50);
}

function startBoot(index = 0) {

    if (index < lines.length) {

        typeLine(lines[index], messages[index], () => {
            startBoot(index + 1);
        });

    } else {

        button.style.transition = 'opacity 0.8s ease';
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';

    }

}

startBoot();

button.addEventListener('click', () => {

    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {

        window.location.href = 'pages/terminal.html';

    }, 1000);

});