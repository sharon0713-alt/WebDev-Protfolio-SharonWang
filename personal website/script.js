// stars + navigation + magic
const canvas = document.getElementById('starCanvas');
const ctx = canvas?.getContext('2d');
let stars = [];

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function initStars() {
    if (!canvas) return;
    stars = [];
    for (let i = 0; i < 180; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            alpha: Math.random() * 0.6 + 0.2,
            spd: 0.03 + Math.random() * 0.08
        });
    }
}
function drawStars() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 200, ${s.alpha + Math.sin(Date.now() * s.spd) * 0.2})`;
        ctx.fill();
    }
    requestAnimationFrame(drawStars);
}
if (canvas) {
    resizeCanvas();
    initStars();
    drawStars();
    window.addEventListener('resize', () => {
        resizeCanvas();
        initStars();
    });
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

const character = document.getElementById('mainCharacter');
const bubble = document.getElementById('bubble');
function showMsg(msg, time = 1800) {
    if (!bubble) return;
    bubble.textContent = msg;
    bubble.classList.remove('hidden');
    setTimeout(() => bubble.classList.add('hidden'), time);
}
if (character) {
    character.addEventListener('click', () => showMsg("✨ a quiet star thanks you ✨"));
    character.addEventListener('mouseenter', () => showMsg("💫 you came", 900));
}
const waveBtn = document.getElementById('waveBtn');
if (waveBtn) waveBtn.addEventListener('click', () => showMsg("👋 hi from another dreamer"));
const magicBtn = document.getElementById('magicBtn');
if (magicBtn) magicBtn.addEventListener('click', () => showMsg("✨ a small spark just for you ✨"));
const musicBtn = document.getElementById('musicBtn');
if (musicBtn) musicBtn.addEventListener('click', () => showMsg("🎵 your inner song is beautiful"));

const earthBtn = document.getElementById('earthBtn');
const earthMsg = document.getElementById('earthMsg');
if (earthBtn && earthMsg) {
    earthBtn.addEventListener('click', () => {
        earthMsg.innerHTML = "🌱 your wish is carried by the wind. thank you.";
        earthMsg.classList.remove('hidden');
        setTimeout(() => earthMsg.classList.add('hidden'), 2500);
    });
}

window.toggleDetails = function(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
};

window.addEventListener('load', () => {
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const text = "I'm Sharon Wang · a quiet creator";
        let i = 0;
        typewriterEl.innerHTML = '';
        function write() {
            if (i < text.length) {
                typewriterEl.innerHTML += text.charAt(i);
                i++;
                setTimeout(write, 70);
            }
        }
        write();
    }
});