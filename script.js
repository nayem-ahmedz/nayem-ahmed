//script
//navigation : mobile icon
function toggleNav(){
    let icon = document.querySelector('.hamburger');
    icon.classList.toggle('h-change');
    let topnav = document.querySelector('.top-nav');
    topnav.classList.toggle('tnc-change');
}

//update footer last-update-date
const lastUpdate = document.getElementById('footer-date-update');
lastUpdate.textContent = 'October 2024';