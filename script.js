function openPopup(event) {
    event.preventDefault();
    document.getElementById('popupModal').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupModal').style.display = 'none';
}