const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
            <div class="nav">
            <h1>PCM</h1><img src="images/icons/tree.PNG" class="logo">
            </div>
    <ul class="links-container">
        <li class="link-item"><a href="./index.html" class="link">Home</a></li>
        <li class="link-item"><a href="./groceries.html" class="link">Stores</a></li>
        <li class="link-item"><a href="./movies.html" class="link">Movies</a></li>
        <li class="link-item"><a href="./map.html" class="link">Map</a></li>
        <li class="link-item"><a href="./contact.html" class="link">Contact</a></li>
        <li class="link-item"><a href="./about.html" class="link">About</a></li>
    </ul>
    `;
}

createNav();