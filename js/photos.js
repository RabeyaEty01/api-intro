function loadPhotos() {
    fetch('http://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos();
function displayPhotos(photos) {
    const photoContainer = document.getElementById('photo')
    for (const photo of photos) {
        const div = document.createElement('div');
        div.innerHTML = `photo:
        <img src="${photo.url}" alt="">`;
        photoContainer.appendChild(div);
    }
}