const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = 'light';

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        currentTheme = 'dark';
        htmlElement.setAttribute('data-theme', 'dark');
    }

    if (toggleButton) {
        toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    let currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    if (toggleButton) {
        toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

document.addEventListener('DOMContentLoaded', initTheme);

if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
}