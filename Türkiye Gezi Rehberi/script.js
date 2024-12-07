function sehirara() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cities = document.querySelectorAll('.city-card');
    
    cities.forEach(city => {
        const cityName = city.querySelector('h2').textContent.toLowerCase(); 
        if (cityName.includes(searchInput)) {
            city.style.display = 'block'; 
        } else {
            city.style.display = 'none'; 
        }
    });
}