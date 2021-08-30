function loadAlbum() {
    fetch('http://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}
loadAlbum();

function displayAlbum(albums) {
    const albumContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerText = album.title;
        p.style.textAlign = 'center';
        albumContainer.appendChild(p);
    }
}