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
const today = new Date();
const month = today.toLocaleString('default', {month: 'short'});
lastUpdate.textContent = month + ' 2024';