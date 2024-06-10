// create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// update cursor position
function updateCursorPosition(e) {
    cursor.style.left = `${e.clientX + window.scrollX}px`;
    cursor.style.top = `${e.clientY + window.scrollY}px`;
}

// update cursor position on mousemove
document.addEventListener('mousemove', updateCursorPosition);

