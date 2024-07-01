function updateClock() {
    const now = new Date();
    const timezoneOffset = parseInt(document.getElementById('timezone-select').value);
    const utcHours = now.getUTCHours();
    const localHours = (utcHours + timezoneOffset + 24) % 24;
    const hours = String(localHours).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
}

document.getElementById('timezone-select').addEventListener('change', updateClock);
setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately



