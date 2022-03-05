const createNav = () => {
    let nav = document.querySelector('.layout');

    nav.innerHTML = `
            <div class="nav">
            <h1>PCM</h1><img src="../images/icons/tree.PNG" class="logo">
            </div>

            <ul class="links-container">

            <li class="link-item"><a href="../index.html" class="link">Home</a></li>
            <li class="link-item"><a href="../groceries.html" class="link">Groceries</a></li>
            <li class="link-item"><a href="../electronics.html" class="link">Electronics</a></li>
            <li class="link-item"><a href="../fashion.html" class="link">Fashion</a></li>
            <li class="link-item"><a href="../restaurants.html" class="link">Restaurants</a></li>
            <li class="link-item"><a href="../diy.html" class="link">DIY</a></li>
            <li class="link-item"><a href="../beauty.html" class="link">Beauty</a></li>
        </ul>
    `;
}

createNav();